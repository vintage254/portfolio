'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from './skeleton'

export function PageLoader() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Portfolio{dots}</p>
        </div>
        
        {/* Mini skeleton preview */}
        <div className="max-w-md mx-auto space-y-4 opacity-30">
          <Skeleton className="h-4 w-48 mx-auto" />
          <Skeleton className="h-3 w-32 mx-auto" />
          <div className="flex justify-center space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ComponentLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
    </div>
  )
}
