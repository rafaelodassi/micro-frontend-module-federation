import Logo from '../../assets/img/logo.svg?inline';
import Notification from '../../assets/icons/notification.svg?inline';
import User from '../../assets/icons/user.svg?inline';
import { ShoppingCart, CircleMinus, CirclePlus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from 'ui';
import { useStore } from 'context';
import { type Product } from 'types';

const Header = () => {
  const { cart, addProductCart, removeProductCart } = useStore();

  const getCount = () => {
    return cart.reduce((acc, cur) => {
      return acc + (cur.count ?? 0);
    }, 0);
  };

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
    <header className='bg-white h-20 px-10 py-5 flex items-center justify-center gap-2'>
      <img src={Logo} />
      <nav className='grow'>
        <ul className='flex items-center justify-center gap-[75px] text-[20px]'>
          <li>
            <a className='hover:text-green-primary transition-all' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='hover:text-green-primary transition-all' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='hover:text-green-primary transition-all' href='#'>
              Service
            </a>
          </li>
          <li>
            <a className='hover:text-green-primary transition-all' href='#'>
              Product
            </a>
          </li>
          <li>
            <a className='hover:text-green-primary transition-all' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='flex items-center justify-center gap-3.5'>
        <Popover>
          <PopoverTrigger>
            <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center relative hover:cursor-pointer hover:bg-green-secondary/55 transition-all'>
              <ShoppingCart className='text-[#2b2b2b]' />
              <div className='absolute rounded-full bg-red-500 text-white size-4 flex items-center justify-center text-[10px] bottom-[-1px] right-[-1px]'>
                {getCount()}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent align='end'>
            {!cart.length ? (
              <span>Empty Cart</span>
            ) : (
              <div>
                {cart.map((p) => (
                  <div key={p.id} className='flex items-center gap-2'>
                    <img src={p.thumbnail} className='h-[50px]' />
                    <span className='font-semibold text-[12px] grow'>
                      {p.title}
                    </span>
                    <div className='flex items-center justify-center gap-1'>
                      <CircleMinus
                        size={14}
                        className='hover:cursor-pointer hover:text-green-primary transition-all'
                        onClick={() => handleRemove(p.id)}
                      />
                      <span>{getCountProduct(p.id)}</span>
                      <CirclePlus
                        size={14}
                        className='hover:cursor-pointer hover:text-green-primary transition-all'
                        onClick={() => handleAdd(p)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </PopoverContent>
        </Popover>
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center'>
          <img src={Notification} />
        </div>
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center'>
          <img src={User} />
        </div>
      </div>
    </header>
  );
};

export default Header;
