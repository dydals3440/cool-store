import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

const router = createBrowserRouter([{ path: '/', element: <HomeLayout /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
