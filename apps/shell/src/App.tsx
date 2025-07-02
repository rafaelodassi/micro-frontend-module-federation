import { lazy, Suspense } from 'react';

import ProductsBanner from './assets/img/products-banner.png';
import ProductsCard1 from './assets/img/products-card1.png';
import Discount from './assets/img/discount.png';
import { Button } from 'ui';
import { StoreProvider } from 'context';

const Header = lazy(() => import('remoteHeader/Header'));
const Cards = lazy(() => import('remoteCards/Cards'));
const Footer = lazy(() => import('remoteFooter/Footer'));

function App() {
  return (
    <StoreProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <Header />
      </Suspense>
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
            <Button
              className='uppercase h-[60px] text-2xl font-semibold text-green-primary mt-7'
              variant={'secondary'}
            >
              Learn More
            </Button>
          </div>
        </div>
        <img src={ProductsBanner} />
      </div>
      <div className='px-10 py-8'>
        <h1 className='text-black font-semibold text-[30px] uppercase mb-8'>
          Category
        </h1>
        asas
      </div>
      <div className='px-10 py-8'>
        <h1 className='text-black font-semibold text-[30px] uppercase mb-8'>
          Featured Products
        </h1>
        <div className='flex gap-9'>
          <div className='rounded-[10px] bg-yellow-primary h-[574px] basis-[554px] flex items-center justify-center flex-col p-6 text-center'>
            <h1 className='block font-semibold text-2xl uppercase mb-3'>
              Fresh Vegetables
            </h1>
            <h1 className='block font-semibold text-5xl uppercase'>Big Sale</h1>
            <img src={ProductsCard1} />
          </div>
          <div className='flex flex-col gap-9 grow'>
            <div className='rounded-[10px] bg-pink-primary/67 h-[267px] bg-[url(./assets/img/products-card2.png)] bg-contain bg-no-repeat bg-top-left p-6 text-center flex flex-col items-end justify-center'>
              <div>
                <div className='text-white flex items-center gap-2'>
                  <h1 className='text-2xl uppercase'>Fresh Fruit</h1>
                  <h1 className='text-3xl font-semibold uppercase'>
                    Super Sale
                  </h1>
                </div>
                <Button className='uppercase h-[55px] text-[20px] font-semibold mt-6'>
                  Shop Now
                </Button>
              </div>
            </div>
            <div className='rounded-[10px] bg-orange-primary h-[267px] bg-[url(./assets/img/products-card3.png)] bg-contain bg-no-repeat bg-bottom-right p-6 pl-16 pr-16 text-center flex flex-col items-start justify-center gap-1'>
              <img src={Discount} />
              <h1 className='uppercase text-white text-[14px]'>
                Enjoy Your Fresh Drink
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 py-8'>
        <h1 className='text-black font-semibold text-[30px] uppercase'>
          All Products
        </h1>
        <Suspense fallback={<p>Carregando...</p>}>
          <Cards />
        </Suspense>
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        <Footer />
      </Suspense>
    </StoreProvider>
  );
}

export default App;
