import { Button } from 'ui';
import Discount from '../../assets/img/discount.png';

const FeaturedProducts = () => {
  return (
    <div className='px-10 pt-8'>
      <h1 className='text-black font-semibold text-[30px] uppercase mb-8'>
        Featured Products
      </h1>
      <div className='flex gap-9 max-md:flex-col'>
        <div className='rounded-[10px] bg-yellow-primary h-[574px] bg-[url(./assets/img/products-card1.png)] bg-contain bg-no-repeat bg-bottom basis-[554px] flex items-center flex-col p-6 pt-16 text-center max-md:basis-auto max-md:h-auto relative'>
          <div className='rounded-[10px] absolute inset-0 w-full h-full bg-yellow-primary z-0 opacity-0 max-md:opacity-70 transition-all'></div>
          <h1 className='block font-semibold text-2xl uppercase z-10'>
            Fresh Vegetables
          </h1>
          <h1 className='block font-semibold text-[44px] uppercase z-10'>
            Big Sale
          </h1>
        </div>
        <div className='flex flex-col gap-9 grow'>
          <div className='rounded-[10px] bg-pink-primary/67 h-[267px] bg-[url(./assets/img/products-card2.png)] bg-contain bg-no-repeat bg-left p-6 text-center flex flex-col items-end justify-center max-md:h-auto relative'>
            <div className='rounded-[10px] absolute inset-0 w-full h-full bg-pink-primary z-0 opacity-0 max-md:opacity-70 transition-all'></div>
            <div className='z-10'>
              <div className='text-white flex items-center gap-2'>
                <h1 className='text-2xl uppercase'>Fresh Fruit</h1>
                <h1 className='text-3xl font-semibold uppercase'>Super Sale</h1>
              </div>
              <Button className='uppercase h-[55px] text-[20px] font-semibold mt-6'>
                Shop Now
              </Button>
            </div>
          </div>
          <div className='rounded-[10px] bg-orange-primary h-[267px] bg-[url(./assets/img/products-card3.png)] bg-contain bg-no-repeat bg-right p-6 pl-16 pr-16 text-center flex flex-col items-start justify-center gap-1 max-md:h-auto relative'>
            <div className='rounded-[10px] absolute inset-0 w-full h-full bg-orange-primary z-0 opacity-0 max-md:opacity-70 transition-all'></div>
            <img src={Discount} className='z-10' />
            <h1 className='uppercase text-white text-[14px] z-10'>
              Enjoy Your Fresh Drink
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedProducts };
