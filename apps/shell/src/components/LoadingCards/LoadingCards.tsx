import { Skeleton } from 'ui';

const LoadingCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
      <Skeleton className='h-[418px] rounded-md bg-gray-300' />
      <Skeleton className='h-[418px] rounded-md bg-gray-300' />
      <Skeleton className='h-[418px] rounded-md bg-gray-300' />
      <Skeleton className='h-[418px] rounded-md bg-gray-300' />
    </div>
  );
};

export { LoadingCards };
