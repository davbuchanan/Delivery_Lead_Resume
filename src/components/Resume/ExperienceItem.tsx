import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@/components/icons'
import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
import { Modal } from '@/components/ui/Modal'
import { cn } from '@/lib/utils'

interface ExperienceItemProps {
  year?: string
  company: string
  type?: string
  role: string
  period?: string
  description: string
  techs?: string[]
  expanded: boolean
  onToggle: () => void
  details?: {
    context?: string
    tasks?: string[]
    training?: string[]
    env?: string
  }
  subItem?: {
    title: string
    description: string
  }
  labels: {
    mainTasks: string
    moreTasks: string
    training?: string
    techEnv: string
    technologies: string
  }
  isHighlighted?: boolean
}

export function ExperienceItem({
  company,
  role,
  period,
  description,
  expanded,
  onToggle,
  details,
}: ExperienceItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDesktop } = useBreakpoints()

  const handleClick = () => {
    if (!details) return

    if (isDesktop) {
      onToggle()
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-5"
    >
      <button
        onClick={handleClick}
        className={cn(
          "w-full text-left rounded-lg p-3 transition-colors",
          details && "hover:bg-resume-primary/5"
        )}
      >
        <div className="relative">

          {details && (
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              className="absolute top-1 right-0"
            >
              <ChevronDownIcon className="w-4 h-4 text-resume-primary" />
            </motion.div>
          )}

          {/* Role — largest, bold */}
          <h3 className="text-base font-semibold text-resume-text">
            {role}
          </h3>

          {/* Company */}
          <p className="text-sm text-resume-text-secondary">
            {company}
          </p>

          {/* Date / period */}
          {period && (
            <p className="text-xs text-resume-text-secondary/70 mt-0.5">
              {period}
            </p>
          )}

          {/* Focus line */}
          {description && (
            <p className="text-sm text-resume-text-secondary mt-1">
              {description}
            </p>
          )}

        </div>
      </button>

      {/* Desktop expand */}
      {details && isDesktop && (
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 ml-3">

                {details.context && (
                  <p className="text-sm text-resume-text-secondary leading-relaxed mb-3">
                    {details.context}
                  </p>
                )}

                {details.tasks && (
                  <ul className="list-disc ml-5 space-y-2 text-sm text-resume-text-secondary">
                    {details.tasks.map(task => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile modal */}
      {details && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header={
            <>
              <h2 className="font-semibold text-lg">{role}</h2>
              <p className="text-sm text-resume-text-secondary">{company}</p>
              {period && (
                <p className="text-xs text-resume-text-secondary/70 mt-0.5">{period}</p>
              )}
            </>
          }
        >
          {details.context && (
            <p className="text-sm text-resume-text-secondary mb-4 leading-relaxed">
              {details.context}
            </p>
          )}

          {details.tasks && (
            <ul className="list-disc ml-5 space-y-2 text-sm text-resume-text-secondary">
              {details.tasks.map(task => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          )}
        </Modal>
      )}
    </motion.div>
  )
}
