import { Form, redirect } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';
import FormInput from './FormInput';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // 주문을하고, removeQueries를 안해주면 최신 정보가 업뎃되지않음. 계속 지워주고, 새로운 쿼리를 받아야함!
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      // 400 => bad request 401 => invalid credential(unAuthorized Error)
      if (error.response.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method='post' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='address' />
      <div className='mt-4'>
        <SubmitBtn text='place your order' />
      </div>
    </Form>
  );
};

export default CheckoutForm;
