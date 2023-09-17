import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <h1 className='text-4'>Error</h1>;
};

export default Error;
