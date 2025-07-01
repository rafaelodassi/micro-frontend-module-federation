import Logo from '../../assets/img/logo.svg?inline';
import Notification from '../../assets/icons/notification.svg?inline';
import User from '../../assets/icons/user.svg?inline';

const Header = () => {
  return (
    <header className='bg-white h-20 px-10 py-5 flex items-center justify-center gap-2'>
      <img src={Logo} alt='Logo' />
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
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center'>
          <img src={Notification} alt='Notification' />
        </div>
        <div className='size-10 bg-green-secondary/33 rounded-full flex items-center justify-center'>
          <img src={User} alt='User' />
        </div>
      </div>
    </header>
  );
};

export default Header;
