import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';
import { ApiEndpoints } from '../core/api-endpoints';
import { AddCartItemRequest, ApiResponse, AuthUser, Cart, CheckoutRequest, CheckoutResponse, LoginData, RegisterData, UserRole } from '../core/models';

// ─── Mock user database ───
interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const MOCK_USERS: MockUser[] = [
  { id: 'u001', name: 'Alice Chen',  email: 'alice@example.com',    password: 'user123',  role: 'USER' },
  { id: 'u002', name: 'Demo User',   email: 'user@bookshop.local',  password: 'user123',  role: 'USER' },
  { id: 'a001', name: 'Bob Admin',   email: 'bob@admin.com',        password: 'admin123', role: 'ADMIN' },
  { id: 'a002', name: 'Demo Admin',  email: 'admin@elibrary.com',   password: 'admin123', role: 'ADMIN' },
  { id: 'sa01', name: 'Root Admin',  email: 'root@elibrary.com',    password: 'root123',  role: 'SUPERADMIN' },
];

// ─── Cart state ───
let cartState: Cart = { items: [], subtotal: 0 };

function makeResponse<T>(body: T, status = 200): Observable<HttpEvent<T>> {
  return of(new HttpResponse({ status, body })).pipe(delay(250));
}

function calcSubtotal(items: Cart['items']) {
  return Number(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0).toFixed(2));
}

function unauthorized(message = 'Missing or invalid bearer token.'): Observable<never> {
  return throwError(
    () => new HttpErrorResponse({ status: 401, statusText: 'Unauthorized', error: { message } })
  );
}

function badRequest(message: string): Observable<never> {
  return throwError(
    () => new HttpErrorResponse({ status: 400, statusText: 'Bad Request', error: { message } })
  );
}

function hasAuth(req: HttpRequest<unknown>) {
  return req.headers.has('Authorization');
}

function isUrl(req: HttpRequest<unknown>, endpoint: string) {
  return req.url.startsWith(endpoint);
}

export const fakeBackendInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  // ─── Mock: POST /auth/login ───
  if (req.method === 'POST' && isUrl(req, ApiEndpoints.authLogin)) {
    const { email, password } = req.body as { email: string; password: string };
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);

    if (!found) {
      // Fall through to real backend — mock user not matched
      return next(req);
    }

    const user: AuthUser = { id: found.id, name: found.name, email: found.email, role: found.role };
    const loginData: LoginData = {
      accessToken: `mock-token-${found.id}-${Date.now()}`,
      refreshToken: null,
      expiresIn: 3600,
      tokenType: 'Bearer',
      user
    };
    const body: ApiResponse<LoginData> = {
      data: loginData,
      meta: { timestamp: new Date().toISOString(), traceId: 'mock' }
    };
    return makeResponse(body);
  }

  // ─── Mock: POST /auth/register ───
  if (req.method === 'POST' && isUrl(req, ApiEndpoints.authRegister)) {
    const { email } = req.body as { name: string; email: string; password: string };
    // Check if mock user already exists
    if (MOCK_USERS.find(u => u.email === email)) {
      return badRequest('Email already registered.');
    }
    // Fall through to real backend for registration
    return next(req);
  }

  // ─── Cart / Checkout require auth ───
  if (isUrl(req, ApiEndpoints.cart) || isUrl(req, ApiEndpoints.checkout)) {
    if (!hasAuth(req)) {
      return unauthorized();
    }
  }

  // ─── Mock: GET /cart ───
  if (req.method === 'GET' && req.url === ApiEndpoints.cart) {
    return makeResponse(cartState);
  }

  // ─── Mock: POST /cart/items ───
  if (req.method === 'POST' && req.url === ApiEndpoints.cartItems) {
    const payload = req.body as AddCartItemRequest;

    if (!payload.bookId || payload.quantity < 1) {
      return badRequest('Invalid cart payload.');
    }

    const existing = cartState.items.find((item) => item.bookId === payload.bookId);
    if (existing) {
      existing.quantity += payload.quantity;
    } else {
      cartState.items.push({
        bookId:    payload.bookId,
        title:     `Book ${payload.bookId.substring(0, 8)}`,
        unitPrice: 10,
        quantity:  payload.quantity
      });
    }

    cartState = { items: [...cartState.items], subtotal: calcSubtotal(cartState.items) };
    return makeResponse(cartState, 201);
  }

  // ─── Mock: POST /orders/checkout ───
  if (req.method === 'POST' && isUrl(req, ApiEndpoints.checkout)) {
    const payload = req.body as CheckoutRequest;

    if (!cartState.items.length) {
      return badRequest('Cart is empty.');
    }
    if (!payload.shippingAddress?.trim()) {
      return badRequest('Shipping address is required.');
    }

    const response: CheckoutResponse = {
      orderId: `ord-${Date.now()}`,
      status: 'PAID',
      totalAmount: cartState.subtotal
    };

    cartState = { items: [], subtotal: 0 };
    return makeResponse(response, 201);
  }

  return next(req);
};
