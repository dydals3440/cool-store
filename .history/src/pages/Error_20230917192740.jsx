import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <main className='grid min-h-[80vh]'></main>;
};

export default Error;
