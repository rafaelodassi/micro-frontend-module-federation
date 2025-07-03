import { useStore } from 'context';
import { Button } from 'ui';
import { type Product } from 'types';
import { CirclePlus, CircleMinus } from 'lucide-react';

interface CardsProps {
  data: Product[];
}

const Cards = ({ data }: CardsProps) => {
  const { selectedCategory, addProductCart, removeProductCart, cart } =
    useStore();

  const productsByCategory = data.filter(
    (p) => p.category === selectedCategory
  );

  const handleAdd = (product: Product) => {
    addProductCart(product);
  };

  const handleRemove = (productId: number) => {
    removeProductCart(productId);
  };

  const getCountProduct = (id: number) => {
    return cart.find((p) => p.id === id)?.count ?? 0;
  };

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
            <div className='flex items-center justify-center gap-3'>
              <div className='flex items-center justify-center gap-1'>
                <CircleMinus
                  className='hover:cursor-pointer hover:text-green-primary transition-all'
                  onClick={() => handleRemove(p.id)}
                />
                <span>{getCountProduct(p.id)}</span>
                <CirclePlus
                  className='hover:cursor-pointer hover:text-green-primary transition-all'
                  onClick={() => handleAdd(p)}
                />
              </div>
              <Button
                className='h-[44px] bg-green-primary text-[18px] font-normal'
                onClick={() => handleAdd(p)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
