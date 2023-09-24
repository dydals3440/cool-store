import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';

const CheckOut = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text={'Your Cart is Empty'} />;
  }
  return (
    <>
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default CheckOut;
