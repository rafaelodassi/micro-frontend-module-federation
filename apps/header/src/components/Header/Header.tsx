import Logo from '../../assets/img/logo.svg?inline';
import Notification from '../../assets/icons/notification.svg?inline';
import User from '../../assets/icons/user.svg?inline';
import { ShoppingCart, CircleMinus, CirclePlus, Menu } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from 'ui';
import { useStore } from 'context';
import { type Product } from 'types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

  const navMenu = (insideSheet: boolean) => {
    return (
      <nav
        className={twMerge(
          clsx('grow max-md:hidden', insideSheet && 'max-md:block')
        )}
      >
        <ul
          className={twMerge(
            clsx(
              'flex items-center justify-evenly text-[20px] gap-4',
              insideSheet && 'flex-col items-start'
            )
          )}
        >
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
    );
  };

  const getTotal = () => {
    return cart.reduce((acc, cur) => {
      return acc + cur.price * cur.count;
    }, 0);
  };

  return (
    <header className='bg-white h-20 px-10 py-5 flex items-center justify-center gap-2'>
      <Sheet>
        <SheetTrigger>
          <Menu className='hover:cursor-pointer hover:text-green-primary transition-all shrink-0 hidden max-md:block' />
        </SheetTrigger>
        <SheetContent side='left' className='w-full'>
          <SheetHeader>
            <SheetDescription>{navMenu(true)}</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <img src={Logo} />
      {navMenu(false)}
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
          <PopoverContent align='end' className='max-md:w-screen'>
            {!cart.length ? (
              <span>Empty Cart</span>
            ) : (
              <div className='flex items-center justify-center flex-col'>
                {cart.map((p) => (
                  <div
                    key={p.id}
                    className='flex items-center gap-2 w-full border-b py-1 first:p-0'
                  >
                    <img src={p.thumbnail} className='h-[50px]' />
                    <span className='font-semibold text-[12px] grow'>
                      {p.title}
                    </span>
                    <span className='font-semibold text-[12px]'>
                      ৳{p.price}
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
                <div className='w-full pt-3 flex items-center justify-center'>
                  <span className='grow'>Total</span>
                  <span className='font-semibold'>৳{getTotal()}</span>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center max-md:hidden'>
          <img src={Notification} />
        </div>
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center max-md:hidden'>
          <img src={User} />
        </div>
      </div>
    </header>
  );
};

export default Header;
