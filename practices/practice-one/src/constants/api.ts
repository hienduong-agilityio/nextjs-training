export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const ENV = {
  ROOT_API: process.env.NEXT_PUBLIC_SERVER_URL,
  USER_ID: process.env.NEXT_PUBLIC_USER_ID,
};

export const API_URL = {
  PRODUCT: `${ENV.ROOT_API}/product`,
  CART: `${ENV.ROOT_API}/carts`,
};

export const USER_ID = ENV.USER_ID;
