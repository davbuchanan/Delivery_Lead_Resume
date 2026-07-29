import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'

const DEFAULT_LABELS: Record<string, string> = {
  fr: 'Télécharger le PDF',
  en: 'Download PDF',
}

// A pdf.path or pdf.label field can be a plain string or a
// LocalizedString ({ en, fr, ... }) — normalize either into a string.
function resolveText(value: unknown, language: string, resolve: (v: Record<string, string>) => string): string | null {
  if (value === null || value === undefined) return null
  if (typeof value === 'string') return value
  if (typeof value === 'object') {
    const record = value as Record<string, string>
    return record[language] ?? resolve(record) ?? null
  }
  return null
}

export function PdfDownload() {
  const { language, resolve } = useTranslation()

  // Priority: explicit config > auto-detected from public/cv/<lang>/
  let resolvedPath: string | null = null
  const configPdf = resumeConfig.pdf as { path?: string | Record<string, string>; label?: string | Record<string, string> } | undefined

  if (configPdf?.path) {
    resolvedPath = resolveText(configPdf.path, language, resolve)
  } else if (detectedAssets.pdf[language]) {
    resolvedPath = detectedAssets.pdf[language]
  }

  if (!resolvedPath) return null

  // Resolve label: explicit config > labels.actions > auto-detect default > fallback
  let downloadLabel: string
  if (configPdf?.label) {
    downloadLabel = resolveText(configPdf.label, language, resolve) ?? DEFAULT_LABELS[language] ?? 'Download PDF'
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
