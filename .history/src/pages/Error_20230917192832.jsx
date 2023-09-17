import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <main className='grid min-h-[80vh] place-items-center px-8'>123</main>;
};

export default Error;
