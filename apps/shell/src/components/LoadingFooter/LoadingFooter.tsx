import { Skeleton } from 'ui';

const LoadingFooter = () => {
  return (
    <footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-4'>
      <Skeleton className='grow h-[100px] rounded-md bg-gray-300' />
      <Skeleton className='grow h-[100px] rounded-md bg-gray-300' />
      <Skeleton className='grow h-[100px] rounded-md bg-gray-300' />
      <Skeleton className='grow h-[100px] rounded-md bg-gray-300' />
    </footer>
  );
};

export { LoadingFooter };
