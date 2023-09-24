import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

// 이거는 훅이 아니라 useDispatch가 작동하지않음;
// store를 app.js를 통해서 직접적으로 넘기는 방법사용!
// 보통 경로에 action: loginAction이렇게 넘기는데, action: loginAction(store)를 넘기면됨!
// 문제점있음, App.js에서 실행되는 순간에 발동한다는 것, form을 제출할 떄가 아닌,  화살표 함수를 한번 더 통하면됨, 이 함수를 반환하는 함수로 변경해주면 됨.
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    // 아래 formInput에 name으로 생성해준게 key가 됨
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please check out');
    }
  };

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          {/* type: submit 별도의 요청 처리가 들어간 버튼 */}
          <SubmitBtn text='login' />
        </div>
        {/* 별도의 요청처리 x */}
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className='text-center'>
          Not a Member Yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
