import { useEffect, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Small delay to let the modal render before playing
      setTimeout(() => {
        videoRef.current?.play().catch(() => {
          // Autoplay blocked — user can press play manually
        })
      }, 100)
    } else {
      videoRef.current?.pause()
      if (videoRef.current) videoRef.current.currentTime = 0
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-[90%] max-w-2xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl leading-none bg-transparent border-none cursor-pointer"
          aria-label="Close video"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full rounded-lg shadow-2xl"
        >
          {/* './intro.mp4' works on GitHub Pages regardless of repo subfolder */}
          <source src="./intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
