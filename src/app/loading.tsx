export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen animate-pulse bg-background">
      {/* Hero Skeleton */}
      <div className="h-[85vh] w-full bg-surface-variant/20" />
      
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto w-full px-8 py-24 space-y-12">
        <div className="h-12 w-1/3 bg-surface-variant/20 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="h-96 w-full bg-surface-variant/20 rounded-3xl" />
          <div className="h-96 w-full bg-surface-variant/20 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
