export type ContactType = 'linkedin' | 'email' | 'phone' | 'location' | 'github' | 'website' | string
export type PresetName = 'minimal' | 'modern' | 'creative' | string

// The index signature lets LocalizedString be used anywhere a
// Record<string, string> or a dynamic string-keyed lookup is expected
// (e.g. resolving by the current language code).
export interface LocalizedString {
  en: string
  fr: string
  [key: string]: string
}

export interface LocalizedStringArray {
  en: string[]
  fr: string[]
  [key: string]: string[]
}

export interface ThemeColors {
  bg: string
  bgCard: string
  text: string
  textSecondary: string
  bgDark: string
  bgCardDark: string
  textDark: string
  textSecondaryDark: string
  primary: string
  primaryLight: string
  primaryDark: string
  primaryLightDark: string
  sidebarLight: string
  sidebarLightEnd: string
  sidebarDark: string
  sidebarDarkEnd: string
}

export interface ContactItemConfig {
  type: ContactType
  label: string
  href?: string
}
export interface SkillItem {
  name: LocalizedString | { name: LocalizedString } | { name: string } | string
  level?: string | number
  color?: string
}
export interface SkillCategory {
  title: LocalizedString
  type: 'text' | 'badges' | string
  items: SkillItem[]
}
export interface Experience {
  id: string
  role: LocalizedString
  company: LocalizedString
  period: LocalizedString
  type?: LocalizedString
  description?: LocalizedString
  techs?: string[]
  isHighlighted?: boolean
  details?: {
    context?: LocalizedString
    tasks?: LocalizedStringArray
    training?: LocalizedStringArray
    env?: LocalizedString
  }
}
export interface EducationItem {
  school: LocalizedString
  degree: LocalizedString
  period: string
  specialty?: LocalizedString
  logo?: string
}
export interface ProjectItem {
  id?: string
  title: LocalizedString
  description?: LocalizedString
  link?: string
  url?: string
  github?: string
  techs?: string[]
}
export interface HobbyItem {
  title: LocalizedString
  details?: LocalizedString[]
}
export interface ResumeConfig {
  personal: {
    name: string
    photo?: string
    photoBackEmoji?: string
    title: LocalizedString
    subtitle?: LocalizedString
    location: string
  }
  seo: {
    title: string
    description: string
  }
  languages: {
    default: string
    available: string[]
    labels: Record<string, string>
  }
  contact: ContactItemConfig[]
  skills: SkillCategory[]
  experiences: Experience[]
  education: EducationItem[]
  projects?: ProjectItem[]
  hobbies?: HobbyItem[]
  pdf?: {
    filename?: string
    author?: string
    label?: LocalizedString | string
    path?: string | Record<string, string>
  }
  theme: {
    preset: PresetName
    colors?: Partial<ThemeColors>
    defaultMode?: 'light' | 'dark' | 'system'
  }
  labels: {
    sections: {
      contact: LocalizedString
      skills: LocalizedString
      experience: LocalizedString
      education: LocalizedString
      projects: LocalizedString
      hobbies?: LocalizedString
    }
    experience: {
      mainTasks: LocalizedString
      moreTasks: LocalizedString
      training?: LocalizedString
      techEnv: LocalizedString
      technologies: LocalizedString
    }
    actions: {
      clickHint: LocalizedString
      switchTheme: LocalizedString
      downloadPdf: LocalizedString
    }
  }
}
