'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { event, pageview, GA_TRACKING_ID } from '@/lib/gtag'

const buildUrl = (pathname: string, searchParams: string | null) => {
  if (!searchParams) return pathname
  return `${pathname}?${searchParams}`
}

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const url = buildUrl(pathname || '/', searchParams?.toString() || null)
    pageview(url)
  }, [pathname, searchParams])

  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined
    const start =
      navigation?.responseStart || performance.timing?.responseStart || 0
    const hydrationMs = Math.max(Math.round(performance.now() - start), 0)
    event({
      action: 'hydration_time',
      category: 'performance',
      value: hydrationMs,
    })
  }, [])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}
