export type ContactType = 'linkedin' | 'email' | 'phone' | 'location' | 'github' | 'website' | string

export type PresetName = 'minimal' | 'modern' | 'creative' | string

export interface LocalizedString {
  en: string
  fr: string
}

export interface ContactItemConfig {
  type: ContactType
  label: string
  href?: string
}

export interface SkillItem {
  name: LocalizedString | { name: LocalizedString } | { name: string } | string
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
  description?: LocalizedString
  techs: string[]
  isHighlighted?: boolean
  details?: {
    context?: LocalizedString
    tasks?: {
      en: string[]
      fr: string[]
    }
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
  techs: string[]
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
  pdf?: {
    filename?: string
    author?: string
  }
  theme: {
    preset: PresetName
  }
  labels: {
    sections: {
      contact: LocalizedString
      skills: LocalizedString
      experience: LocalizedString
      education: LocalizedString
      projects: LocalizedString
      hobbies: LocalizedString
    }
    experience: {
      mainTasks: LocalizedString
      moreTasks: LocalizedString
      training: LocalizedString
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
