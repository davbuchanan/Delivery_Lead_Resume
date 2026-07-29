import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { SidebarSection } from './SidebarSection'
import { SkillCategory } from './SkillCategory'
import { TechBadge } from './TechBadge'

export function Sidebar() {
  const { resolve } = useTranslation()
  const { skills, hobbies, labels } = resumeConfig

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
                    {category.items.map((item) => {
                      const techName = typeof item.name === 'string' ? item.name : Object.values(item.name)[0]
                      return <TechBadge key={techName} tech={techName} color={item.color} />
                    })}
                  </div>
                )}
                {category.type === 'text' && (
                  <p className="text-xs text-resume-text-secondary">
                    {category.items
                      .map((item) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                      .join(', ')}
                  </p>
                )}
                {category.type === 'languages' && (
                  <div className="flex items-center gap-3 text-sm flex-wrap">
                    {category.items.map((item, j) => {
                      const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                      return (
                        <span key={`${name}-${j}`} className="flex items-center gap-1">
                          <span className="text-resume-text-secondary">
                            {name} {item.level ? resolve(item.level) : ''}
                            {item.details && (
                              <span className="text-xs opacity-70 ml-1">{item.details}</span>
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

      {/* Hobbies */}
      {hobbies && hobbies.length > 0 && labels.sections.hobbies && (
        <SidebarSection title={resolve(labels.sections.hobbies)}>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby, i) => (
              <div key={`${resolve(hobby.title)}-${i}`}>
                <p className="font-medium text-sm text-resume-text">{resolve(hobby.title)}</p>
                {hobby.details?.map((detail, j) => (
                  <p key={j} className="text-xs text-resume-text-secondary">
                    {resolve(detail)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </SidebarSection>
      )}
    </div>
  )
}
