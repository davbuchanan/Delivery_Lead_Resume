import { useRef, useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import type { LocalizedString } from '@/data/types'
import { ContactItem } from './ContactItem'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'

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

function ProfilePhoto({
  photo,
  name,
  emoji,
  onPlayStateChange,
}: {
  photo?: string
  name: string
  emoji?: string
  onPlayStateChange: (playing: boolean) => void
}) {
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    const next = !isPlaying
    setIsPlaying(next)
    onPlayStateChange(next)
    if (!next) {
      videoRef.current?.pause()
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    onPlayStateChange(false)
  }

  if (isPlaying) {
    return (
      <div
        onClick={handleClick}
        className="w-36 h-36 rounded-full overflow-hidden border-4 border-resume-bg/30 shadow-lg shrink-0 cursor-pointer relative"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleEnded}
        >
          <source src="./intro.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }

  if (!photo || hasError) {
    return (
      <div
        onClick={handleClick}
        className="w-36 h-36 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg shrink-0 cursor-pointer"
      >
        <span className="text-4xl">{emoji || '👨‍💻'}</span>
      </div>
    )
  }

  return (
    <div className="shrink-0 relative cursor-pointer group" onClick={handleClick}>
      {/* Play button overlay on hover */}
      <div className="absolute inset-0 rounded-full z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12 drop-shadow-lg">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <img
        src={photo}
        alt={`Profile photo of ${name} — click to watch intro video`}
        className="w-36 h-36 rounded-full object-cover border-4 border-resume-bg/30 shadow-lg"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// Location lookup per experience id — update values here as needed
const experienceLocations: Record<string, string> = {
  'msi-experts-rte': 'France',
  'amaris-scrum-master': 'France',
  'invesco-implementation-lead': 'South Africa',
}

export function MainContent() {
  const { language, resolve, resolveArray } = useTranslation()
  const { personal, contact, experiences, projects, education, skills, labels } = resumeConfig
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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

  const competencyCategories = skills.filter((cat) => cat.type === 'text')
  const toolkitCategories = skills.filter((cat) => cat.type === 'badges')

  const sectionLabels = {
    summary: { en: 'Professional Summary', fr: 'Résumé Professionnel' },
    skillsHeading: { en: 'Professional Skills', fr: 'Compétences Professionnelles' },
  }

  const summaryParagraphs: Record<string, string[]> = {
    en: [
      'Release Train Engineer & Scrum Master with over 15 years of experience delivering complex projects. I focus on building delivery systems that actually work taking high-level strategy and turning it into predictable, reliable execution.',
      'Throughout my career, I\u2019ve moved from managing team-level delivery to architecting organization-wide Agile frameworks. My approach is simple: I standardize the mess, clear the blockers, and use data to show where we can improve. At Airbus alone I\u2019ve led the delivery of over 11,000 user stories and 1,200 production deployments. I streamlined PI planning to cut event time by 66% while hitting an 86% objective completion rate. I\u2019m at my best when I\u2019m connecting leadership strategy with team reality, ensuring that teams have a clear path to deliver value without the usual corporate friction.',
    ],
    fr: [
      'Release Train Engineer & Scrum Master avec plus de 15 ans d\'exp\u00e9rience dans la livraison de projets complexes. Je me concentre sur la mise en place de syst\u00e8mes de delivery qui fonctionnent r\u00e9ellement, en transformant une strat\u00e9gie de haut niveau en ex\u00e9cution pr\u00e9visible et fiable.',
      'Tout au long de ma carri\u00e8re, je suis pass\u00e9 de la gestion de la livraison au niveau des \u00e9quipes \u00e0 l\'architecture de frameworks Agile \u00e0 l\'\u00e9chelle de l\'organisation. Mon approche est simple : je standardise le d\u00e9sordre, je l\u00e8ve les blocages, et j\'utilise la donn\u00e9e pour identifier les axes d\'am\u00e9lioration. Chez Airbus, j\'ai \u00e0 moi seul pilot\u00e9 la livraison de plus de 11 000 user stories et 1 200 d\u00e9ploiements en production. J\'ai optimis\u00e9 le PI Planning pour r\u00e9duire sa dur\u00e9e de 66 % tout en atteignant un taux de compl\u00e9tion des objectifs de 86 %. Je suis le plus efficace lorsque je fais le lien entre la strat\u00e9gie de la direction et la r\u00e9alit\u00e9 des \u00e9quipes, en garantissant aux \u00e9quipes un chemin clair pour d\u00e9livrer de la valeur sans la friction habituelle des grandes organisations.',
    ],
  }
  const currentSummary = summaryParagraphs[language] ?? summaryParagraphs.en

  return (
    <div className="w-full" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11pt' }}>

      {/* ===== Header ===== */}
      <div className="p-8 bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 text-center sm:text-left">
          <div className="flex flex-col items-center gap-2">
            <ProfilePhoto
              photo={(personal.photo || detectedAssets.photo) ? assetUrl(personal.photo || detectedAssets.photo!) : undefined}
              name={personal.name}
              emoji={personal.photoBackEmoji}
              onPlayStateChange={setIsVideoPlaying}
            />
            {!isVideoPlaying && (
              <span className="text-xs text-resume-text-secondary italic">
                👆 Click to watch my intro
              </span>
            )}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-resume-text" style={{ fontSize: '14pt' }}>{personal.name}</h1>
            <p className="font-semibold text-resume-primary mb-2" style={{ fontSize: '12pt' }}>{resolve(personal.title)}</p>
            {personal.subtitle && (
              <p className="text-resume-text-secondary mb-3" style={{ fontSize: '11pt' }}>{resolve(personal.subtitle)}</p>
            )}
            <div className="flex flex-col space-y-1.5 items-center sm:items-start" style={{ fontSize: '11pt' }}>
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
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve(sectionLabels.summary)}
          </h2>
          {currentSummary.map((paragraph, i) => (
            <p key={i} className={`text-resume-text-secondary leading-relaxed ${i > 0 ? 'mt-4' : ''}`} style={{ fontSize: '11pt' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve(sectionLabels.skillsHeading)}
          </h2>
          <div className="space-y-1 text-resume-text-secondary leading-relaxed" style={{ fontSize: '11pt' }}>
            {competencyCategories.map((cat, i) => (
              <p key={i}>
                <span className="font-semibold text-resume-text">{resolve(cat.title)}:</span>{' '}
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
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve(labels.sections.experience)}
          </h2>
          <div className="space-y-2">
            {experiences.map((exp, idx) => {
              const expId = exp.id || String(idx)
              const expType = 'type' in exp && exp.type ? resolve(exp.type as Parameters<typeof resolve>[0]) : undefined
              const expSubItem = 'subItem' in exp && exp.subItem ? (exp.subItem as { title: Parameters<typeof resolve>[0]; description: Parameters<typeof resolve>[0] }) : undefined
              return (
                <ExperienceItem
                  key={expId}
                  company={resolve(exp.company as Parameters<typeof resolve>[0])}
                  type={expType}
                  role={resolve(exp.role as Parameters<typeof resolve>[0])}
                  period={resolve(exp.period as Parameters<typeof resolve>[0])}
                  location={experienceLocations[expId]}
                  description={resolve(exp.description as Parameters<typeof resolve>[0])}
                  expanded={expandedExp === expId}
                  onToggle={() => toggleExp(expId)}
                  details={
                    exp.details
                      ? {
                          tasks: exp.details.tasks ? resolveArray(exp.details.tasks as Parameters<typeof resolveArray>[0]) : undefined,
                          training: 'training' in exp.details && exp.details.training ? resolveArray((exp.details as { training: Parameters<typeof resolveArray>[0] }).training) : undefined,
                          env: '',
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

        {projects && projects.length > 0 && labels.sections.projects && (
          <div className="mt-8">
            <h2 className="font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20" style={{ fontSize: '12pt' }}>
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

      {/* ===== Footer: Career History, Technical Toolkit, Education ===== */}
      <div className="p-8 bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to">

        <div className="mb-6">
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve({ en: 'Career History', fr: 'Historique de Carrière' })}
          </h2>
          <ul className="space-y-1 text-resume-text-secondary" style={{ fontSize: '11pt' }}>
            {experiences.map((exp, idx) => (
              <li key={exp.id || idx}>
                <span className="font-bold text-resume-text">
                  {resolve(exp.role as Parameters<typeof resolve>[0])}
                </span>
                {' | '}
                {resolve(exp.company as Parameters<typeof resolve>[0])}
                {' | '}
                {resolve(exp.period as Parameters<typeof resolve>[0])}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-resume-primary/20 mb-6" />

        <div className="mb-6">
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve({ en: 'Technical Toolkit', fr: 'Boîte à Outils Technique' })}
          </h2>
          <ul className="space-y-1 text-resume-text-secondary" style={{ fontSize: '11pt' }}>
            {toolkitCategories.map((cat, i) => (
              <li key={i}>
                <span className="font-semibold text-resume-text">{resolve(cat.title)}:</span>{' '}
                {cat.items.map((item) => skillItemName(item, resolve)).join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-resume-primary/20 mb-6" />

        <div>
          <h2 className="font-bold tracking-widest text-resume-text mb-3" style={{ fontSize: '12pt' }}>
            {resolve(labels.sections.education)}
          </h2>
          <ul className="space-y-1 text-resume-text-secondary" style={{ fontSize: '11pt' }}>
            {education.map((edu, i) => (
              <li key={i}>
                <span className="font-semibold text-resume-text">{resolve(edu.school)}:</span>{' '}
                {resolve(edu.degree)}
                {edu.specialty ? `, ${resolve(edu.specialty)}` : ''}
                {edu.period ? ` (${edu.period})` : ''}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}
