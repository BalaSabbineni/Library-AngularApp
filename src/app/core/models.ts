export type UserRole = 'USER' | 'ADMIN' | 'SUPERADMIN';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterData {
  userId: string;
  email: string;
  status: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string | null;
  expiresIn: number;
  tokenType: string;
  user: AuthUser;
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    timestamp: string;
    traceId: string;
  };
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  coverUrl?: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  pdfDownloadUrl?: string;
}

export interface BackendBook {
  id: string;
  name: string;
  author: string;
  isbn: string;
  publisher: string;
  publishedDate: string;
  category: string;
  language: string;
  pageCount: number;
  price: number;
  currency: string;
  active: boolean;
  inStock: boolean;
  description: string;
  pdfStorageType: 'DATABASE_BLOB' | 'FILE_SYSTEM' | 'OBJECT_STORAGE';
  pdfFileName: string;
  pdfMimeType: string;
  pdfFileSizeBytes: number;
  pdfDownloadUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookListResponse {
  items: Book[];
  page: number;
  size: number;
  total: number;
}

export interface PagedBackendResponse {
  content: BackendBook[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface AddCartItemRequest {
  bookId: string;
  quantity: number;
}

export interface CartItem {
  bookId: string;
  title: string;
  unitPrice: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}

export interface CheckoutRequest {
  paymentMethod: 'CARD' | 'UPI' | 'WALLET';
  shippingAddress: string;
}

export interface CheckoutResponse {
  orderId: string;
  status: 'CREATED' | 'PAID';
  totalAmount: number;
}

export interface UploadBookRequest {
  name: string;
  author: string;
  isbn: string;
  publisher: string;
  publishedDate: string;
  category: string;
  language: string;
  pageCount: number;
  price: number;
  currency: string;
  active: boolean;
  inStock: boolean;
  description: string;
  pdfStorageType: 'DATABASE_BLOB' | 'FILE_SYSTEM' | 'OBJECT_STORAGE';
  pdfFile: File;
}
