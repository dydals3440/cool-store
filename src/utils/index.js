import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// Formatting Price
export const formatPrice = (price) => {
  const wonAmount = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format((price / 100).toFixed(2));
  return wonAmount;
};
