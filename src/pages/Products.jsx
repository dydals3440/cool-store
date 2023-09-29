import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';
const url = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        // 그냥 params이라하면 못읽음, 위에서 queryParams로 구조분해할당했기 때문
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // request.url로 쿼리파람있으면, 바로 이해할 수 있음.
    // console.log(request);

    // 수동 접근법
    // const params = new URL(request.url).searchParams;
    // const search = params.get('search');
    // console.log(search);

    // fromEntries
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(params);

    // axios의 두번쨰 인자로, 파람을 넘길 수 있음.

    // await customFetch(url, {params });
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
