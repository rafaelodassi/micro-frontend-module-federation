import { Button } from 'ui';

const Banner = () => {
  return (
    <div className='bg-green-primary w-full min-h-[408px] p-10 flex items-center justify-center bg-[url(./assets/img/products-banner.png)] bg-contain bg-no-repeat bg-right relative'>
      <div className='absolute inset-0 w-full h-full bg-green-primary z-0 opacity-0 max-lg:opacity-70 transition-all'></div>
      <div className='grow z-10 relative'>
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
    </div>
  );
};

export { Banner };
