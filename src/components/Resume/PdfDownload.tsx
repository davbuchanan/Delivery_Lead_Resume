import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import type { LocalizedString } from '@/data/types'

const DEFAULT_LABELS: Record<string, string> = {
  fr: 'Télécharger le PDF',
  en: 'Download PDF',
}

// A pdf.path or pdf.label field can be a plain string or a
// LocalizedString/language-keyed object — normalize either into a string.
function resolveField(value: string | Record<string, string> | undefined, language: string, resolve: (v: LocalizedString) => string): string | null {
  if (value === undefined) return null
  if (typeof value === 'string') return value
  return value[language] ?? resolve(value as LocalizedString) ?? null
}

export function PdfDownload() {
  const { language, resolve } = useTranslation()

  // Priority: explicit config path > auto-detected from public/cv/<lang>/
  const resolvedPath = resolveField(resumeConfig.pdf?.path, language, resolve) ?? detectedAssets.pdf[language] ?? null

  if (!resolvedPath) return null

  // Resolve label: explicit config > labels.actions > auto-detect default > fallback
  let downloadLabel: string
  if (resumeConfig.pdf?.label) {
    downloadLabel = resolveField(resumeConfig.pdf.label, language, resolve) ?? DEFAULT_LABELS[language] ?? 'Download PDF'
  } else if (resumeConfig.labels.actions.downloadPdf) {
    downloadLabel = resolve(resumeConfig.labels.actions.downloadPdf)
  } else {
    downloadLabel = DEFAULT_LABELS[language] ?? DEFAULT_LABELS.en ?? 'Download PDF'
  }

  return (
    <a
      href={assetUrl(resolvedPath)}
      download={resolvedPath.split('/').pop() ?? 'resume.pdf'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
    >
      <DownloadIcon className="w-4 h-4" />
      {downloadLabel}
    </a>
  )
}
