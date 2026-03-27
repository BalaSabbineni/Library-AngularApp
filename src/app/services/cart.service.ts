import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ApiEndpoints } from '../core/api-endpoints';
import { AddCartItemRequest, Book, Cart, CartItem, CheckoutRequest, CheckoutResponse } from '../core/models';

const CART_KEY = 'elibrary_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartState = signal<Cart>(this.loadLocalCart());

  readonly cart       = computed(() => this.cartState());
  readonly itemCount  = computed(() => this.cartState().items.reduce((sum, i) => sum + i.quantity, 0));

  constructor(private readonly http: HttpClient) {}

  getCart() {
    return this.http.get<Cart>(ApiEndpoints.cart).pipe(
      tap((cart) => {
        this.cartState.set(cart);
        this.saveLocalCart(cart);
      })
    );
  }

  addItem(payload: AddCartItemRequest, book?: Book) {
    return this.http.post<Cart>(ApiEndpoints.cartItems, payload).pipe(
      tap((cart) => {
        this.cartState.set(cart);
        this.saveLocalCart(cart);
      })
    );
  }

  checkout(payload: CheckoutRequest) {
    return this.http.post<CheckoutResponse>(ApiEndpoints.checkout, payload);
  }

  clearLocalCart() {
    const empty: Cart = { items: [], subtotal: 0 };
    this.cartState.set(empty);
    localStorage.removeItem(CART_KEY);
  }

  private loadLocalCart(): Cart {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : { items: [], subtotal: 0 };
    } catch {
      return { items: [], subtotal: 0 };
    }
  }

  private saveLocalCart(cart: Cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
}
