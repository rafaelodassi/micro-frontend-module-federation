import { lazy, Suspense } from 'react';

const Cards = lazy(() => import('remoteCards/Cards'));

const Products = () => {
  return (
    <div className='px-10 py-8'>
      <h1 className='text-black font-semibold text-[30px] uppercase'>
        All Products
      </h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <Cards />
      </Suspense>
    </div>
  );
};

export { Products };
