import { Skeleton } from "../ui/skeleton"

export const NoteSkeleton = () => {

  return (
    <div className="bg-white/10 p-4 rounded-lg mt-4 space-y-4">
      <div className="flex justify-between gap-3 items-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
    </div>
  )
}