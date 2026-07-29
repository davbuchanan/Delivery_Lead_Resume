// Add or update these exports in your types definition file (e.g., src/data/types.ts)

export type ContactType = 'linkedin' | 'email' | 'phone' | 'location' | 'github' | 'website' | string;

export type PresetName = 'minimal' | 'modern' | 'creative' | string;

// Ensure your Experience interface matches this structure:
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

// (Keep the rest of your existing types below...)
