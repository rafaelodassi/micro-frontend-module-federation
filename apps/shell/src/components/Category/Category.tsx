import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useStore } from 'context';
import type { Category as CategoryType } from 'types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'ui';
import { useEffect } from 'react';

interface CategoryProps {
  data: CategoryType[];
  error: boolean;
  loading: boolean;
}

const Category = ({ data, error, loading }: CategoryProps) => {
  const { setSelectedCategory, selectedCategory } = useStore();

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    if (data.length) {
      setSelectedCategory(data[0].name);
    }
  }, [data]);

  return (
    <div className='px-10 pt-8 pb-6'>
      <h1 className='text-black font-semibold text-[30px] uppercase mb-8'>
        Category
      </h1>
      <div className='w-full flex items-center justify-center'>
        <Carousel
          className='w-[calc(100%-96px)]'
          opts={{
            align: 'center',
          }}
        >
          <CarouselContent>
            {data.map((category, i) => (
              <CarouselItem
                key={category.id}
                className={twMerge(
                  clsx(
                    'flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:text-green-primary basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-full',
                    selectedCategory === '' && i === 0 && 'text-green-primary',
                    selectedCategory === category.name && 'text-green-primary'
                  )
                )}
                onClick={() => handleSelectCategory(category.name)}
              >
                <img src={category.thumbnail} className='max-h-[150px]' />
                <h1 className='text-2xl font-semibold uppercase'>
                  {category.name}
                </h1>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export { Category };
