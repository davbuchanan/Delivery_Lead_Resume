import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'

const PHOTO_ANIMATION_DURATION = 0.8

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
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg shrink-0">
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
        className="relative w-32 h-32 cursor-pointer"
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
  const { resolve, resolveArray } = useTranslation()
  const { personal, contact, experiences, projects, education, labels } = resumeConfig
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

  type Translatable = Parameters<typeof resolve>[0]
  const userSummary = (personal as { summary?: Translatable }).summary
  const sectionLabels = labels.sections as Record<string, Translatable>

  return (
    <div className="w-full p-8">
      {/* Top Header: Photo + Name, Title & Inline Contact Information */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 mb-8 pb-6 border-b border-resume-primary/20 text-center sm:text-left">
        <ProfilePhoto
          photo={(personal.photo || detectedAssets.photo) ? assetUrl(personal.photo || detectedAssets.photo!) : undefined}
          name={personal.name}
          emoji={personal.photoBackEmoji}
        />

        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-2xl font-bold text-resume-text">{personal.name}</h1>
          <p className="text-sm font-semibold text-resume-primary mb-2">{resolve(personal.title)}</p>
          
          {/* Inline Contact Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-sm text-resume-text-secondary">
            {contact.map((item, index) => (
              <div key={`${item.type}-${item.label}`} className="flex items-center">
                {index > 0 && <span className="mr-2 text-resume-primary/40">|</span>}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-resume-primary transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {userSummary && sectionLabels.summary && (
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3 pb-1 border-b border-resume-primary/20">
            {resolve(sectionLabels.summary)}
          </h2>
          <p className="text-sm text-resume-text-secondary leading-relaxed whitespace-pre-line">
            {resolve(userSummary)}
          </p>
        </div>
      )}

      {/* Professional Skills */}
      {sectionLabels.skills && (
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-3 pb-1 border-b border-resume-primary/20">
            {resolve(sectionLabels.skills)}
          </h2>
          <p className="text-sm text-resume-text-secondary leading-relaxed">
            {/* Customize your inline skills text here or pull from config */}
            Agile & Framework Leadership: SAFe Framework & PI Optimization · Cross-Functional Team Leadership · SMART Objective Formulation · Data-Driven Process Optimization · Release Governance & Execution: End-to-End Release Scheduling · Production Change Management · Risk & Dependency Mitigation · Defect Lifecycle · Supplier Alignment · Stakeholder & Team Alignment: Executive Stakeholder Management · Cross-Departmental Communication
          </p>
        </div>
      )}

      {/* Professional Experience */}
      <div className="relative">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-6 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.experience)}
        </h2>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              year={resolve(exp.period)}
              company={resolve(exp.company)}
              type={exp.type ? resolve(exp.type) : undefined}
              role={resolve(exp.role)}
              description={resolve(exp.description)}
              techs={exp.techs}
              expanded={expandedExp === exp.id}
              onToggle={() => toggleExp(exp.id)}
              details={
                exp.details
                  ? {
                      context: resolve(exp.details.context),
                      tasks: exp.details.tasks ? resolveArray(exp.details.tasks) : undefined,
                      training: exp.details.training ? resolveArray(exp.details.training) : undefined,
                      env: resolve(exp.details.env),
                    }
                  : undefined
              }
              subItem={
                exp.subItem
                  ? {
                      title: resolve(exp.subItem.title),
                      description: resolve(exp.subItem.description),
                    }
                  : undefined
              }
              labels={experienceLabels}
              isHighlighted={exp.isHighlighted}
            />
          ))}
        </div>
      </div>

      {/* Projects */}
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
                description={resolve(project.description)}
                techs={project.techs}
                url={project.url}
                github={project.github}
              />
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      <div className="mt-8">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
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
  )
}
