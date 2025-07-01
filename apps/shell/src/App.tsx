import { lazy, Suspense } from 'react';

import ProductsBanner from './assets/img/products-banner.png';

const Header = lazy(() => import('remoteHeader/Header'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>}>
        <Header />
        <div className='bg-green-primary w-full h-[408px] px-10 flex items-center justify-center'>
          <div className='grow'>
            <div className='max-w-[432px]'>
              <h1 className='text-white font-semibold text-4xl uppercase leading-12'>
                Healthy and Fresh Grocery
              </h1>
              <p className='text-white uppercase font-light mt-3'>
                We pride ourselves on providing a curated of the finest,
                nutrient-rich products that cater to your health conscious
                lifestyle.
              </p>
              <button className='uppercase bg-white w-[200px] h-[60px] rounded-[5px] flex items-center justify-center mt-7 text-2xl font-semibold text-green-primary hover:opacity-80 transition-all hover:cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>
          <img src={ProductsBanner} />
        </div>
        <div className='px-10 py-8'>
          <h1 className='text-black font-semibold text-[32px] uppercase'>
            Category
          </h1>
        </div>
        <div className='px-10 py-8'>
          <h1 className='text-black font-semibold text-[32px] uppercase'>
            Featured Products
          </h1>
        </div>
        <div className='px-10 py-8'>
          <h1 className='text-black font-semibold text-[32px] uppercase'>
            All Products
          </h1>
        </div>
      </Suspense>
    </>
  );
}

export default App;
