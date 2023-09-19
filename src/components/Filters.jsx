import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormInput, FormSelect } from './index';

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    // Form의 default는 get요청
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      {/* name을 제대로 지정해줘야함 검색어 입력후, 서치버튼을 누르면 products?search=검색어로 쿼리파람 사용함 */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
      />
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
      />
      {/* ORDER */}
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
