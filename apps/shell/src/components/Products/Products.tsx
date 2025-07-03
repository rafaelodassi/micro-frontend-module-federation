import { lazy, Suspense } from 'react';
import type { Product } from 'types';
import { LoadingCards } from '../LoadingCards';
const Cards = lazy(() => import('remoteCards/Cards'));

interface ProductsProps {
  data: Product[];
  error: boolean;
  loading: boolean;
}

const Products = ({ data }: ProductsProps) => {
  return (
    <div className='px-10 pt-8 pb-10'>
      <h1 className='text-black font-semibold text-[30px] uppercase mb-8'>
        All Products
      </h1>
      <Suspense fallback={<LoadingCards />}>
        <Cards data={data} />
      </Suspense>
    </div>
  );
};

export { Products };
