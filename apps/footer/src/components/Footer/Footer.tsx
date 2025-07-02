const Footer = () => {
  return (
    <footer className='flex px-10 py-8 items-center justify-center bg-green-tertiary'>
      <nav className='grow'>
        <h1 className='font-semibold text-[24px] uppercase mb-2'>About</h1>
        <a className='text-[20px] block mb-2 hover:underline hover:cursor-pointer'>
          Who we are?
        </a>
        <a className='text-[20px] block hover:underline hover:cursor-pointer'>
          Privacy Policyr
        </a>
      </nav>
      <nav className='grow'>
        <h1 className='font-semibold text-[24px] uppercase'>Help</h1>
        <a className='text-[20px] block mb-2 hover:underline hover:cursor-pointer'>
          Support
        </a>
        <a className='text-[20px] block hover:underline hover:cursor-pointer'>
          Help Center
        </a>
      </nav>
      <nav className='grow'>
        <h1 className='font-semibold text-[24px] uppercase'>Contact</h1>
        <a className='text-[20px] block mb-2 hover:underline hover:cursor-pointer'>
          Terms & Condition
        </a>
        <a className='text-[20px] block hover:underline hover:cursor-pointer'>
          Return & Exchange Policy
        </a>
      </nav>
      <nav className='grow'>
        <h1 className='font-semibold text-[24px] uppercase'>Follow us</h1>
        <a className='text-[20px] block mb-2 hover:underline hover:cursor-pointer'>
          Facebook
        </a>
        <a className='text-[20px] block hover:underline hover:cursor-pointer'>
          Instagram
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
