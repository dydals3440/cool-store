import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className='grid min-h-[80vh] place-items-center px-8'>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
        </div>
      </main>
    );
  }
  return (
    <main className='grid min-h-[80vh] place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>There was an error</h4>
    </main>
  );
};

export default Error;
