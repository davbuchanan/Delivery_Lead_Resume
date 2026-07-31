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
  location?: string
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
  location,
  description,
  expanded,
  onToggle,
  details,
  isHighlighted: _isHighlighted,
  subItem: _subItem,
  labels: _labels,
  year: _year,
  techs: _techs,
  type: _type,
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

  const expandedContent = (
    <div className="mt-3 ml-3">
      {details?.context && (
        <p className="text-sm text-resume-text-secondary leading-relaxed mb-3">
          {details.context}
        </p>
      )}
      {details?.tasks && (
        <ul className="list-disc ml-5 space-y-2 text-sm text-resume-text-secondary">
          {details.tasks.map(task => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  )

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

          <div className="flex gap-1 items-baseline">
            <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Role:</span>
            <span className="text-sm text-resume-text">{role}</span>
          </div>

          <div className="flex gap-1 items-baseline mt-0.5">
            <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Company:</span>
            <span className="text-sm text-resume-text-secondary">{company}</span>
          </div>

          {period && (
            <div className="flex gap-1 items-baseline mt-0.5">
              <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Date:</span>
              <span className="text-sm text-resume-text-secondary">{period}</span>
            </div>
          )}

          {location && (
            <div className="flex gap-1 items-baseline mt-0.5">
              <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Location:</span>
              <span className="text-sm text-resume-text-secondary">{location}</span>
            </div>
          )}

          {description && (
            <div className="flex gap-1 items-baseline mt-0.5">
              <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Focus:</span>
              <span className="text-sm text-resume-text-secondary">{description}</span>
            </div>
          )}
        </div>
      </button>

      {details && isDesktop && (
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {expandedContent}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {details && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header={
            <>
              <div className="flex gap-1 items-baseline">
                <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Role:</span>
                <span className="font-semibold text-lg text-resume-text">{role}</span>
              </div>
              <div className="flex gap-1 items-baseline mt-0.5">
                <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Company:</span>
                <span className="text-sm text-resume-text-secondary">{company}</span>
              </div>
              {period && (
                <div className="flex gap-1 items-baseline mt-0.5">
                  <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Date:</span>
                  <span className="text-sm text-resume-text-secondary">{period}</span>
                </div>
              )}
              {location && (
                <div className="flex gap-1 items-baseline mt-0.5">
                  <span className="text-sm font-semibold text-resume-text w-20 shrink-0">Location:</span>
                  <span className="text-sm text-resume-text-secondary">{location}</span>
                </div>
              )}
            </>
          }
        >
          {expandedContent}
        </Modal>
      )}
    </motion.div>
  )
}
