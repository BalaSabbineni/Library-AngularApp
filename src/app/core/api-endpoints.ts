import { environment } from '../../environments/environment';

const base = environment.apiBaseUrl;

export const ApiEndpoints = {
  authLogin: `${base}/auth/login`,
  authRegister: `${base}/auth/register`,
  books: `${base}/books`,
  cart: `${base}/cart`,
  cartItems: `${base}/cart/items`,
  checkout: `${base}/orders/checkout`,
  superadminAdmins: `${base}/superadmin/admins`
};
