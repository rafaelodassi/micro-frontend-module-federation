import { Skeleton } from 'ui';

const LoadingHeader = () => {
  return (
    <div className='px-10 py-5 flex gap-8 h-20 items-center justify-center'>
      <Skeleton className='size-10 rounded-full bg-gray-300' />
      <div className='flex items-center justify-evenly grow gap-10'>
        <Skeleton className='grow w-[60px] h-[24px] rounded-md bg-gray-300' />
        <Skeleton className='grow w-[60px] h-[24px] rounded-md bg-gray-300' />
        <Skeleton className='grow w-[60px] h-[24px] rounded-md bg-gray-300' />
        <Skeleton className='grow w-[60px] h-[24px] rounded-md bg-gray-300' />
        <Skeleton className='grow w-[60px] h-[24px] rounded-md bg-gray-300' />
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Skeleton className='size-10 rounded-full bg-gray-300' />
        <Skeleton className='size-10 rounded-full bg-gray-300' />
        <Skeleton className='size-10 rounded-full bg-gray-300' />
      </div>
    </div>
  );
};

export { LoadingHeader };
