import { Skeleton } from "./skeleton"

export function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full md:hidden" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <Skeleton className="h-12 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-80 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
        <Skeleton className="h-6 w-full max-w-xl mx-auto mb-12" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </section>
  )
}

export function StackSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Skeleton className="h-16 w-16 rounded-lg mb-3" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-56 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-800">
              <Skeleton className="h-12 w-12 rounded-lg mb-4" />
              <Skeleton className="h-6 w-40 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PortfolioSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-72 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group">
              <Skeleton className="h-48 w-full rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FooterSkeleton() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div>
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-28 mb-4" />
            <div className="flex space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>
    </footer>
  )
}

export function AppLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarSkeleton />
      <HeroSkeleton />
      <StackSkeleton />
      <ServicesSkeleton />
      <PortfolioSkeleton />
      <FooterSkeleton />
    </div>
  )
}
