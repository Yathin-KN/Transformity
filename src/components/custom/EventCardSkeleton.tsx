import { Skeleton } from "@/components/ui/skeleton"


const EventCardSkeleton = () => {
  return (
    <Skeleton className="rounded-md md:flex overflow-hidden relative z-0 w-full md:w-full lg:w-full bg-gray-300">
      <Skeleton className="w-full md:w-[53vw] relative h-[320px] bg-gray-400"></Skeleton>
      <Skeleton className="bg-gray-600 w-full p-4 m-2">
        <Skeleton className="flex justify-between">
          <Skeleton className="w-full">
            <Skeleton className="font-saira text-xl font-semibold w-3/4 h-6 bg-gray-400 mb-2"></Skeleton>
            <Skeleton className="flex w-full gap-1 flex-col flex-nowrap py-1">
              <Skeleton className="font-saira text-md w-1/2 h-4 bg-gray-400"></Skeleton>
              <Skeleton className="font-saira text-md w-1/2 h-4 bg-gray-400"></Skeleton>
            </Skeleton>
          </Skeleton>
        </Skeleton>
        <Skeleton className="font-saira tracking-normal text-white text-md h-20 bg-gray-400 mb-4"></Skeleton>
        <Skeleton className="flex flex-wrap space-x-2">
          <Skeleton className="w-1/4 h-4 bg-gray-400"></Skeleton>
          <Skeleton className="w-1/4 h-4 bg-gray-400"></Skeleton>
        </Skeleton>
      </Skeleton>
    </Skeleton>
  );
};

export default EventCardSkeleton;
