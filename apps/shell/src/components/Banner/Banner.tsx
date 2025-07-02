import { Button } from 'ui';
import ProductsBanner from '../../assets/img/products-banner.png';

const Banner = () => {
  return (
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
  );
};

export { Banner };
