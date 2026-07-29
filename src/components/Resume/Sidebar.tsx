import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import type { LocalizedString } from '@/data/types'
import { SidebarSection } from './SidebarSection'
import { SkillCategory } from './SkillCategory'
import { TechBadge } from './TechBadge'

// Safely turn a name/level/details field into a displayable string,
// no matter which shape it comes in as: a plain string/number, a
// LocalizedString object ({ en, fr, ... }), or a wrapper object
// ({ name: LocalizedString | string }).
function displayValue(value: unknown, resolve: (v: LocalizedString) => string): string {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (typeof value === 'object') {
    if ('name' in (value as Record<string, unknown>)) {
      return displayValue((value as { name: unknown }).name, resolve)
    }
    return resolve(value as LocalizedString)
  }
  return ''
}

export function Sidebar() {
  const { resolve } = useTranslation()
  const { skills, labels } = resumeConfig

  return (
    <div className="p-8 bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to">
      {/* Skills */}
      {skills && labels.sections.skills && (
        <SidebarSection title={resolve(labels.sections.skills)}>
          <div className="space-y-4">
            {skills.map((category, i) => (
              <SkillCategory key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
                {category.type === 'badges' && (
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item, j) => {
                      const techName = displayValue(item.name, resolve)
                      const color = (item as { color?: string }).color
                      return <TechBadge key={`${techName}-${j}`} tech={techName} color={color} />
                    })}
                  </div>
                )}
                {category.type === 'text' && (
                  <p className="text-xs text-resume-text-secondary">
                    {category.items
                      .map((item) => displayValue(item.name, resolve))
                      .join(', ')}
                  </p>
                )}
                {category.type === 'languages' && (
                  <div className="flex items-center gap-3 text-sm flex-wrap">
                    {category.items.map((item, j) => {
                      const name = displayValue(item.name, resolve)
                      const level = (item as { level?: unknown }).level
                      const details = (item as { details?: unknown }).details
                      return (
                        <span key={`${name}-${j}`} className="flex items-center gap-1">
                          <span className="text-resume-text-secondary">
                            {name} {level ? displayValue(level, resolve) : ''}
                            {details !== undefined && details !== null && (
                              <span className="text-xs opacity-70 ml-1">{displayValue(details, resolve)}</span>
                            )}
                          </span>
                        </span>
                      )
                    })}
                  </div>
                )}
              </SkillCategory>
            ))}
          </div>
        </SidebarSection>
      )}
    </div>
  )
}
