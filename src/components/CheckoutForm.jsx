import { Form } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';
import FormInput from './FormInput';

export const action = (store) => async () => {
  console.log(store.getState());
  return null;
};

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
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
