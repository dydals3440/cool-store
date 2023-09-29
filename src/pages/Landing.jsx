import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';
// 1. 쿼리 먼저 설정
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  // 쿼리클라이언트 설정으로 인해, await customFetch(url)이 아래와 같이 변경됨.
  // query가 cache에 있고, 유효한 상태라면 쿼리에서 데이터를 갖고올 수 있음
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
