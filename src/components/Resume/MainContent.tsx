import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import type { LocalizedString } from '@/data/types'
import { ContactItem } from './ContactItem'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'

const PHOTO_ANIMATION_DURATION = 0.8

// Safely turn a skill item's `name` field into a displayable string,
// whether it's a plain string, a LocalizedString, or a wrapper object.
function skillItemName(item: { name: unknown }, resolve: (v: LocalizedString) => string): string {
  const name = item.name
  if (typeof name === 'string') return name
  if (name && typeof name === 'object') {
    if ('name' in (name as Record<string, unknown>)) {
      return skillItemName(name as { name: unknown }, resolve)
    }
    return resolve(name as LocalizedString)
  }
  return ''
}

function ProfilePhoto({ photo, name, emoji }: { photo?: string; name: string; emoji?: string }) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasError, setHasError] = useState(false)
  const handleFlip = () => {
    if (isSpinning) return
    setIsSpinning(true)
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }
  if (!photo || hasError) {
    return (
      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg shrink-0">
        <span className="text-4xl">{emoji || '👨‍💻'}</span>
      </div>
    )
  }
  return (
    <div style={{ perspective: '300px' }} className="shrink-0">
      <motion.div
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        onAnimationComplete={() => setIsSpinning(false)}
        animate={{ rotateY: isSpinning ? 360 : 0 }}
        transition={{ duration: PHOTO_ANIMATION_DURATION, ease: 'easeInOut' }}
        className="relative w-36 h-36 cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        role="button"
        tabIndex={0}
        aria-label={`Photo of ${name} — click to flip`}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-4 border-resume-bg/30 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={photo}
            alt={`Profile photo of ${name}`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
        <div
          className="absolute inset-0 rounded-full border-4 border-resume-bg/30 shadow-lg bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </motion.div>
    </div>
  )
}

export function MainContent() {
  const { language, resolve, resolveArray } = useTranslation()
  const { personal, contact, experiences, projects, education, skills, labels } = resumeConfig
  const [expandedExp, setExpandedExp] = useState<string | null>(null)

  const toggleExp = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id)
  }

  const experienceLabels = {
    mainTasks: resolve(labels.experience.mainTasks),
    moreTasks: resolve(labels.experience.moreTasks),
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
  }

  // "Professional Skills" (short competency summaries) vs "Technical Toolkit"
  // (concrete tools/software) — both derived straight from the skills config
  // so they never drift out of sync with the real data.
  const competencyCategories = skills.filter((cat) => cat.type === 'text')
  const toolkitCategories = skills.filter((cat) => cat.type === 'badges')

  const sectionLabels = {
    summary: { en: 'Professional Summary', fr: 'Résumé Professionnel' },
    skillsHeading: { en: 'Professional Skills', fr: 'Compétences Professionnelles' },
  }

  const summaryParagraphs: Record<string, string[]> = {
    en: [
      'Release Train Engineer & Scrum Master with over 15 years of experience delivering complex projects. I focus on building delivery systems that actually work taking high-level strategy and turning it into predictable, reliable execution.',
      'Throughout my career, I’ve moved from managing team-level delivery to architecting organization-wide Agile frameworks. My approach is simple: I standardize the mess, clear the blockers, and use data to show where we can improve. At Airbus alone I’ve led the delivery of over 11,000 user stories and 1,200 production deployments. I streamlined PI planning to cut event time by 66% while hitting an 86% objective completion rate. I’m at my best when I’m connecting leadership strategy with team reality, ensuring that teams have a clear path to deliver value without the usual corporate friction.',
    ],
    fr: [
      'Release Train Engineer & Scrum Master avec plus de 15 ans d\'expérience dans la livraison de projets complexes. Je me concentre sur la mise en place de systèmes de delivery qui fonctionnent réellement, en transformant une stratégie de haut niveau en exécution prévisible et fiable.',
      'Tout au long de ma carrière, je suis passé de la gestion de la livraison au niveau des équipes à l\'architecture de frameworks Agile à l\'échelle de l\'organisation. Mon approche est simple : je standardise le désordre, je lève les blocages, et j\'utilise la donnée pour identifier les axes d\'amélioration. Chez Airbus, j\'ai à moi seul piloté la livraison de plus de 11 000 user stories et 1 200 déploiements en production. J\'ai optimisé le PI Planning pour réduire sa durée de 66 % tout en atteignant un taux de complétion des objectifs de 86 %. Je suis le plus efficace lorsque je fais le lien entre la stratégie de la direction et la réalité des équipes, en garantissant aux équipes un chemin clair pour délivrer de la valeur sans la friction habituelle des grandes organisations.',
    ],
  }
  const currentSummary = summaryParagraphs[language] ?? summaryParagraphs.en

  return (
    <div className="w-full">
      {/* ===== Header (grey background) ===== */}
      <div className="p-8 bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 text-center sm:text-left">
          <ProfilePhoto
            photo={(personal.photo || detectedAssets.photo) ? assetUrl(personal.photo || detectedAssets.photo!) : undefined}
            name={personal.name}
            emoji={personal.photoBackEmoji}
          />
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl font-bold text-resume-text">{personal.name}</h1>
            <p className="text-sm font-semibold text-resume-primary mb-2">{resolve(personal.title)}</p>
            {personal.subtitle && (
              <p className="text-xs text-resume-text-secondary mb-3">{resolve(personal.subtitle)}</p>
            )}
            <div className="flex flex-col space-y-1.5 text-sm items-center sm:items-start">
              {contact.map((item) => (
                <ContactItem key={`${item.type}-${item.label}`} type={item.type} label={item.label} href={item.href} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-resume-primary/20" />

      {/* ===== Professional Summary + Skills ===== */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3">
            {resolve(sectionLabels.summary)}
          </h2>
          {currentSummary.map((paragraph, i) => (
            <p key={i} className={`text-sm text-resume-text-secondary leading-relaxed ${i > 0 ? 'mt-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3">
            {resolve(sectionLabels.skillsHeading)}
          </h2>
          <div className="space-y-1 text-sm text-resume-text-secondary leading-relaxed">
            {competencyCategories.map((cat, i) => (
              <p key={i}>
                <span className="font-medium text-resume-text">{resolve(cat.title)}:</span>{' '}
                {cat.items.map((item) => skillItemName(item, resolve)).join(' · ')}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-resume-primary/20" />

      {/* ===== Professional Experience ===== */}
      <div className="p-8">
        <div className="relative">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-6">
            {resolve(labels.sections.experience)}
          </h2>
          <div className="space-y-2">
            {experiences.map((exp, idx) => {
              const expType = 'type' in exp && exp.type ? resolve(exp.type as Parameters<typeof resolve>[0]) : undefined
              const expSubItem = 'subItem' in exp && exp.subItem ? (exp.subItem as { title: Parameters<typeof resolve>[0]; description: Parameters<typeof resolve>[0] }) : undefined
              return (
                <ExperienceItem
                  key={exp.id || idx}
                  year=""
                  company={resolve(exp.company as Parameters<typeof resolve>[0])}
                  type={expType}
                  role={resolve(exp.role as Parameters<typeof resolve>[0])}
                  description={resolve(exp.description as Parameters<typeof resolve>[0])}
                  techs={exp.techs ?? []}
                  expanded={expandedExp === (exp.id || String(idx))}
                  onToggle={() => toggleExp(exp.id || String(idx))}
                  details={
                    exp.details
                      ? {
                          context: resolve(exp.details.context as Parameters<typeof resolve>[0]),
                          tasks: exp.details.tasks ? resolveArray(exp.details.tasks as Parameters<typeof resolveArray>[0]) : undefined,
                          training: 'training' in exp.details && exp.details.training ? resolveArray((exp.details as { training: Parameters<typeof resolveArray>[0] }).training) : undefined,
                          env: exp.details.env ? resolve(exp.details.env as Parameters<typeof resolve>[0]) : undefined,
                        }
                      : undefined
                  }
                  subItem={
                    expSubItem
                      ? {
                          title: resolve(expSubItem.title),
                          description: resolve(expSubItem.description),
                        }
                      : undefined
                  }
                  labels={experienceLabels}
                  isHighlighted={'isHighlighted' in exp ? Boolean(exp.isHighlighted) : false}
                />
              )
            })}
          </div>
        </div>

        {/* Projects (only rendered if present in config) */}
        {projects && projects.length > 0 && labels.sections.projects && (
          <div className="mt-8">
            <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
              {resolve(labels.sections.projects)}
            </h2>
            <div className="space-y-1">
              {projects.map((project) => (
                <ProjectItem
                  key={project.id}
                  title={resolve(project.title)}
                  description={project.description ? resolve(project.description) : ''}
                  techs={project.techs ?? []}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-resume-primary/20" />

      {/* ===== Footer (grey background): Career History, Technical Toolkit, Education ===== */}
      <div className="p-8 bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to">
        <div className="mb-6">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3">
            {resolve({ en: 'Career History', fr: 'Historique de Carrière' })}
          </h2>
          <ul className="space-y-1 text-sm text-resume-text-secondary">
            {experiences.map((exp, idx) => (
              <li key={exp.id || idx}>
                {resolve(exp.role as Parameters<typeof resolve>[0])} | {resolve(exp.company as Parameters<typeof resolve>[0])} | {resolve(exp.period as Parameters<typeof resolve>[0])}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-resume-primary/20 mb-6" />

        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3">
            {resolve({ en: 'Technical Toolkit', fr: 'Boîte à Outils Technique' })}
          </h2>
          <ul className="space-y-1 text-sm text-resume-text-secondary">
            {toolkitCategories.map((cat, i) => (
              <li key={i}>
                <span className="font-medium text-resume-text">{resolve(cat.title)}:</span>{' '}
                {cat.items.map((item) => skillItemName(item, resolve)).join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4">
            {resolve(labels.sections.education)}
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <EducationItem
                key={`${resolve(edu.school)}-${resolve(edu.degree)}-${edu.period ?? i}`}
                school={resolve(edu.school)}
                degree={resolve(edu.degree)}
                specialty={edu.specialty ? resolve(edu.specialty) : undefined}
                period={edu.period}
                logo={edu.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
