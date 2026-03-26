import { useEffect, useState } from 'react'

/**
 * Observes an element and adds 'is-visible' class when it enters the viewport.
 */
export function useScrollAnimation(sectionIds: string[], threshold = 0.5) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible / intersecting entry and mark it active.
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (entry.isIntersecting) {
            setActive(id)
            return
          }
        }
        // If none intersecting, clear active 
        setActive(null)
      },
      { threshold }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, threshold])

  return active
}