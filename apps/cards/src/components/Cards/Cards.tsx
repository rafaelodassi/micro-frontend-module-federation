import { useStore } from 'context';
import { Button } from 'ui';
import { type Product } from '../../types/product';

interface CardsProps {
  data: Product[];
}

const Cards = ({ data }: CardsProps) => {
  const { selectedCategory } = useStore();

  const productsByCategory = data.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className='flex gap-6 flex-wrap'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
        {productsByCategory.map((p) => (
          <div
            key={p.id}
            className='border border-green-primary p-4 rounded-[5px] text-center h-[418px] flex flex-col items-center justify-center gap-2'
          >
            <img src={p.thumbnail} className='max-h-[180px]' />
            <h1 className='text-[20px]'>{p.title}</h1>
            <span className='text-[20px]'>{p.weight}Kg</span>
            <span className='text-[20px]'>৳{p.price}</span>
            <Button className='h-[44px] bg-green-primary text-[18px] font-normal'>
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
