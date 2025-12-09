'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { SectionPlaceholder } from '../SectionPlaceholder'

const Globe = dynamic(() => import('../Globe').then((module) => module.Globe), {
  ssr: false,
  // suspense enabled for React Suspense usage
  suspense: true,
})

export function GlobeClient() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const target = ref.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '256px' },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<SectionPlaceholder height="320px" />}>
          <Globe />
        </Suspense>
      ) : (
        <SectionPlaceholder height="320px" />
      )}
    </div>
  )
}
