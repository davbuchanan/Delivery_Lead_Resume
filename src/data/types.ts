export interface Experience {
  id: string
  role: {
    en: string
    fr: string
  }
  company: {
    en: string
    fr: string
  }
  period: {
    en: string
    fr: string
  }
  // Add this property here:
  focus?: {
    en: string
    fr: string
  }
  description?: {
    en: string
    fr: string
  }
  techs?: string[]
  isHighlighted?: boolean
  details?: {
    context?: {
      en: string
      fr: string
    }
    tasks?: {
      en: string[]
      fr: string[]
    }
    env?: {
      en: string
      fr: string
    }
  }
}
