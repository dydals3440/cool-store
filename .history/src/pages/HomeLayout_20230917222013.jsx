import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Header />
        <Navbar />
      </nav>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
