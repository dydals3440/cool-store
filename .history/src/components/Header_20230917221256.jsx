import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {/* USER */}
        <div className='flex ga-x-6 justify-center items-center'>
          <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
