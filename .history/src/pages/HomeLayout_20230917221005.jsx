import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <HEader />
      </nav>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
