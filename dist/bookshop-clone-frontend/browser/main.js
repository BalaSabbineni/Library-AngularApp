import {
  ApiEndpoints,
  AuthService,
  CartService,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  HttpErrorResponse,
  HttpResponse,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  delay,
  inject,
  of,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  throwError,
  withComponentInputBinding,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HSIE7PRS.js";

// src/app/layout/navbar/navbar.component.ts
var _c0 = () => ({ category: "fiction" });
var _c1 = () => ({ category: "non-fiction" });
var _c2 = () => ({ category: "science" });
var _c3 = () => ({ category: "history" });
var _c4 = () => ({ category: "self-help" });
var _c5 = () => ({ category: "mystery" });
var _c6 = () => ({ category: "ebooks" });
var _c7 = () => ({ category: "new" });
function NavbarComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, "Admin Panel");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1, "Super Admin");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount);
  }
}
function NavbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, NavbarComponent_Conditional_14_Conditional_2_Template, 2, 0, "a", 15)(3, NavbarComponent_Conditional_14_Conditional_3_Template, 2, 0, "a", 16);
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 18);
    \u0275\u0275element(6, "path", 19)(7, "line", 20)(8, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, NavbarComponent_Conditional_14_Conditional_9_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 23);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_14_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275text(11, "Sign Out");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.authService.user()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSuperAdmin ? 3 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.cartCount > 0 ? 9 : -1);
  }
}
function NavbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAuthModal("login"));
    });
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 25);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAuthModal("register"));
    });
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_33_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
    \u0275\u0275text(1, " Signing in\u2026 ");
  }
}
function NavbarComponent_Conditional_33_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In \u2192 ");
  }
}
function NavbarComponent_Conditional_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 33);
    \u0275\u0275text(1, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 34)(3, "label", 35);
    \u0275\u0275text(4, " Email ");
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_33_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.signInForm.email, $event) || (ctx_r1.signInForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 35);
    \u0275\u0275text(7, " Password ");
    \u0275\u0275elementStart(8, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_33_Conditional_9_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.signInForm.password, $event) || (ctx_r1.signInForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function NavbarComponent_Conditional_33_Conditional_9_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.signIn());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 38);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.signIn());
    });
    \u0275\u0275template(10, NavbarComponent_Conditional_33_Conditional_9_Conditional_10_Template, 2, 0)(11, NavbarComponent_Conditional_33_Conditional_9_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 39);
    \u0275\u0275text(13, " New here? ");
    \u0275\u0275elementStart(14, "button", 40);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAuthMode("register"));
    });
    \u0275\u0275text(15, "Create account");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signInForm.email);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signInForm.password);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loadingAuth());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingAuth() ? 10 : 11);
  }
}
function NavbarComponent_Conditional_33_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
    \u0275\u0275text(1, " Registering\u2026 ");
  }
}
function NavbarComponent_Conditional_33_Conditional_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Account \u2192 ");
  }
}
function NavbarComponent_Conditional_33_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 33);
    \u0275\u0275text(1, "Create account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 34)(3, "label", 35);
    \u0275\u0275text(4, " Full Name ");
    \u0275\u0275elementStart(5, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_33_Conditional_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.name, $event) || (ctx_r1.registerForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 35);
    \u0275\u0275text(7, " Email ");
    \u0275\u0275elementStart(8, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_33_Conditional_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.email, $event) || (ctx_r1.registerForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 35);
    \u0275\u0275text(10, " Password ");
    \u0275\u0275elementStart(11, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_33_Conditional_10_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.password, $event) || (ctx_r1.registerForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function NavbarComponent_Conditional_33_Conditional_10_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Conditional_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275template(13, NavbarComponent_Conditional_33_Conditional_10_Conditional_13_Template, 2, 0)(14, NavbarComponent_Conditional_33_Conditional_10_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 39);
    \u0275\u0275text(16, " Already have an account? ");
    \u0275\u0275elementStart(17, "button", 40);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAuthMode("login"));
    });
    \u0275\u0275text(18, "Sign in");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.email);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.password);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loadingAuth());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingAuth() ? 13 : 14);
  }
}
function NavbarComponent_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.authError());
  }
}
function NavbarComponent_Conditional_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.authSuccess());
  }
}
function NavbarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAuthModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 27)(2, "button", 28);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAuthModal());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "button", 30);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAuthMode("login"));
    });
    \u0275\u0275text(6, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAuthMode("register"));
    });
    \u0275\u0275text(8, "Register");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, NavbarComponent_Conditional_33_Conditional_9_Template, 16, 4)(10, NavbarComponent_Conditional_33_Conditional_10_Template, 19, 5)(11, NavbarComponent_Conditional_33_Conditional_11_Template, 2, 1, "p", 31)(12, NavbarComponent_Conditional_33_Conditional_12_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.authMode() === "login");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.authMode() === "register");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.authMode() === "login" ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.authError() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.authSuccess() ? 12 : -1);
  }
}
var NavbarComponent = class _NavbarComponent {
  authService = inject(AuthService);
  cartService = inject(CartService);
  router = inject(Router);
  showAuthModal = signal(false);
  authMode = signal("login");
  loadingAuth = signal(false);
  authError = signal("");
  authSuccess = signal("");
  searchTerm = "";
  signInForm = {
    email: "",
    password: ""
  };
  registerForm = {
    name: "",
    email: "",
    password: ""
  };
  openAuthModal(mode = "login") {
    this.authMode.set(mode);
    this.showAuthModal.set(true);
    this.authError.set("");
    this.authSuccess.set("");
  }
  closeAuthModal() {
    this.showAuthModal.set(false);
    this.authError.set("");
    this.authSuccess.set("");
  }
  setAuthMode(mode) {
    this.authMode.set(mode);
    this.authError.set("");
    this.authSuccess.set("");
  }
  signIn() {
    this.authError.set("");
    this.loadingAuth.set(true);
    this.authService.signIn(this.signInForm).subscribe({
      next: () => {
        this.loadingAuth.set(false);
        this.closeAuthModal();
        this.signInForm = { email: "", password: "" };
      },
      error: (err) => {
        this.loadingAuth.set(false);
        this.authError.set(err?.error?.message || err?.error?.error?.message || "Sign in failed.");
      }
    });
  }
  register() {
    this.authError.set("");
    this.loadingAuth.set(true);
    this.authService.register(this.registerForm).subscribe({
      next: (res) => {
        this.loadingAuth.set(false);
        this.authSuccess.set(`Registered ${res.email}. Check your inbox to verify, then sign in.`);
        this.signInForm.email = this.registerForm.email;
        this.signInForm.password = this.registerForm.password;
        this.authMode.set("login");
        this.registerForm = { name: "", email: "", password: "" };
      },
      error: (err) => {
        this.loadingAuth.set(false);
        this.authError.set(err?.error?.message || err?.error?.error?.message || "Registration failed.");
      }
    });
  }
  signOut() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  onSearch() {
    if (!this.searchTerm.trim())
      return;
    this.router.navigate(["/books"], { queryParams: { q: this.searchTerm.trim() } });
  }
  get cartCount() {
    return this.cartService.itemCount();
  }
  get isAdmin() {
    const role = this.authService.user()?.role;
    return role === "ADMIN" || role === "SUPERADMIN";
  }
  get isSuperAdmin() {
    return this.authService.user()?.role === "SUPERADMIN";
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 34, vars: 19, consts: [[1, "navbar"], [1, "navbar-inner"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "search-pill"], ["type", "text", "placeholder", "Search books, authors\u2026", "aria-label", "Search books", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["aria-label", "Submit search", 1, "search-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "nav-actions"], ["aria-label", "Book categories", 1, "category-nav"], ["routerLink", "/books", 3, "queryParams"], [1, "user-name"], ["routerLink", "/admin", 1, "btn-ghost", "admin-link"], ["routerLink", "/superadmin", 1, "btn-ghost", "superadmin-link"], ["routerLink", "/user/cart", "aria-label", "Cart", 1, "cart-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 01-8 0"], [1, "cart-badge"], [1, "btn-ghost", "sign-out-btn", 3, "click"], [1, "btn-ghost", 3, "click"], [1, "btn-primary", 3, "click"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Authentication", 1, "auth-modal"], ["aria-label", "Close", 1, "modal-close", 3, "click"], [1, "auth-tabs"], [3, "click"], ["role", "alert", 1, "auth-msg", "auth-msg--error"], ["role", "status", 1, "auth-msg", "auth-msg--success"], [1, "auth-title"], [1, "auth-fields"], [1, "field-label"], ["type", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "field-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", "auth-submit", 3, "click", "disabled"], [1, "auth-footer-text"], [1, "btn-link", 3, "click"], [1, "spinner"], ["type", "text", "placeholder", "Jane Doe", "autocomplete", "name", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", 1, "field-input", 3, "ngModelChange", "keyup.enter", "ngModel"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "E-Library");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function NavbarComponent_Template_input_keyup_enter_8_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_9_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "circle", 9)(12, "line", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275template(14, NavbarComponent_Conditional_14_Template, 12, 4)(15, NavbarComponent_Conditional_15_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "nav", 12)(17, "a", 13);
      \u0275\u0275text(18, "Fiction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275text(20, "Non-Fiction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 13);
      \u0275\u0275text(22, "Science");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 13);
      \u0275\u0275text(24, "History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 13);
      \u0275\u0275text(26, "Self-Help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 13);
      \u0275\u0275text(28, "Mystery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 13);
      \u0275\u0275text(30, "E-Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 13);
      \u0275\u0275text(32, "New Releases");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, NavbarComponent_Conditional_33_Template, 13, 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.authService.isLoggedIn() ? 14 : 15);
      \u0275\u0275advance(3);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(13, _c2));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(14, _c3));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(15, _c4));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(16, _c5));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(17, _c6));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(18, _c7));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAuthModal() ? 33 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.navbar-inner[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 14px 24px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n}\n.search-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  overflow: hidden;\n  transition: border-color var(--transition);\n}\n.search-pill[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-accent);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  padding: 10px 16px;\n  font-size: 0.95rem;\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--color-text-muted);\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  transition: color var(--transition);\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  white-space: nowrap;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-link[_ngcontent-%COMP%] {\n  border-color: rgba(212, 168, 67, 0.4);\n  color: var(--color-accent);\n  font-size: 0.85rem;\n  padding: 7px 14px;\n}\n.superadmin-link[_ngcontent-%COMP%] {\n  border-color: rgba(82, 201, 122, 0.4);\n  color: var(--color-success);\n  font-size: 0.85rem;\n  padding: 7px 14px;\n}\n.cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: transparent;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n  transition: border-color var(--transition), color var(--transition);\n}\n.cart-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: var(--color-accent);\n  color: #0f0f1a;\n  font-size: 0.65rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.sign-out-btn[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 8px 14px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px 12px;\n  display: flex;\n  gap: 28px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.category-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.category-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  transition: color var(--transition);\n  padding-bottom: 2px;\n}\n.category-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.category-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  border-bottom: 1px solid var(--color-accent);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(2px);\n  z-index: 200;\n}\n.auth-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 201;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(92vw, 440px);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-card);\n}\n.modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 18px;\n  background: none;\n  border: none;\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  transition: color var(--transition);\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.auth-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--color-surface-2);\n  border-radius: var(--radius-sm);\n  padding: 4px;\n}\n.auth-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  color: var(--color-text-muted);\n  padding: 8px;\n  border-radius: calc(var(--radius-sm) - 2px);\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: background var(--transition), color var(--transition);\n}\n.auth-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: #0f0f1a;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.auth-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.auth-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  font-size: 1rem;\n}\n.auth-footer-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.auth-msg[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.auth-msg--error[_ngcontent-%COMP%] {\n  background: rgba(224, 82, 82, 0.12);\n  color: var(--color-danger);\n  border: 1px solid rgba(224, 82, 82, 0.3);\n}\n.auth-msg--success[_ngcontent-%COMP%] {\n  background: rgba(82, 201, 122, 0.12);\n  color: var(--color-success);\n  border: 1px solid rgba(82, 201, 122, 0.3);\n}\n@media (max-width: 768px) {\n  .navbar-inner[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n    padding: 12px 16px;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .nav-actions[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    justify-content: flex-end;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .category-nav[_ngcontent-%COMP%] {\n    padding: 0 16px 10px;\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<header class="navbar">
  <div class="navbar-inner">

    <!-- Brand -->
    <a routerLink="/" class="brand">
      <span class="brand-mark">\u{1F4DA}</span>
      <span class="brand-name">E-Library</span>
    </a>

    <!-- Search -->
    <div class="search-pill">
      <input
        class="search-input"
        type="text"
        [(ngModel)]="searchTerm"
        placeholder="Search books, authors\u2026"
        (keyup.enter)="onSearch()"
        aria-label="Search books"
      />
      <button class="search-btn" (click)="onSearch()" aria-label="Submit search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>

    <!-- Actions -->
    <div class="nav-actions">
      @if (authService.isLoggedIn()) {
        <span class="user-name">{{ authService.user()?.name }}</span>

        @if (isAdmin) {
          <a routerLink="/admin" class="btn-ghost admin-link">Admin Panel</a>
        }
        @if (isSuperAdmin) {
          <a routerLink="/superadmin" class="btn-ghost superadmin-link">Super Admin</a>
        }

        <button class="cart-btn" routerLink="/user/cart" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          @if (cartCount > 0) {
            <span class="cart-badge">{{ cartCount }}</span>
          }
        </button>

        <button class="btn-ghost sign-out-btn" (click)="signOut()">Sign Out</button>
      } @else {
        <button class="btn-ghost" (click)="openAuthModal('login')">Sign In</button>
        <button class="btn-primary" (click)="openAuthModal('register')">Register</button>
      }
    </div>

  </div>

  <!-- Category Nav -->
  <nav class="category-nav" aria-label="Book categories">
    <a routerLink="/books" [queryParams]="{category: 'fiction'}">Fiction</a>
    <a routerLink="/books" [queryParams]="{category: 'non-fiction'}">Non-Fiction</a>
    <a routerLink="/books" [queryParams]="{category: 'science'}">Science</a>
    <a routerLink="/books" [queryParams]="{category: 'history'}">History</a>
    <a routerLink="/books" [queryParams]="{category: 'self-help'}">Self-Help</a>
    <a routerLink="/books" [queryParams]="{category: 'mystery'}">Mystery</a>
    <a routerLink="/books" [queryParams]="{category: 'ebooks'}">E-Books</a>
    <a routerLink="/books" [queryParams]="{category: 'new'}">New Releases</a>
  </nav>
</header>

<!-- Auth Modal -->
@if (showAuthModal()) {
  <div class="modal-backdrop" (click)="closeAuthModal()" role="presentation"></div>

  <div class="auth-modal" role="dialog" aria-modal="true" aria-label="Authentication">
    <button class="modal-close" (click)="closeAuthModal()" aria-label="Close">\u2715</button>

    <div class="auth-tabs">
      <button
        [class.active]="authMode() === 'login'"
        (click)="setAuthMode('login')"
      >Sign In</button>
      <button
        [class.active]="authMode() === 'register'"
        (click)="setAuthMode('register')"
      >Register</button>
    </div>

    @if (authMode() === 'login') {
      <h2 class="auth-title">Welcome back</h2>

      <div class="auth-fields">
        <label class="field-label">
          Email
          <input
            class="field-input"
            type="email"
            [(ngModel)]="signInForm.email"
            placeholder="you@example.com"
            autocomplete="email"
          />
        </label>
        <label class="field-label">
          Password
          <input
            class="field-input"
            type="password"
            [(ngModel)]="signInForm.password"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            autocomplete="current-password"
            (keyup.enter)="signIn()"
          />
        </label>
      </div>

      <button class="btn-primary auth-submit" [disabled]="loadingAuth()" (click)="signIn()">
        @if (loadingAuth()) {
          <span class="spinner"></span> Signing in\u2026
        } @else {
          Sign In \u2192
        }
      </button>

      <p class="auth-footer-text">
        New here?
        <button class="btn-link" (click)="setAuthMode('register')">Create account</button>
      </p>
    } @else {
      <h2 class="auth-title">Create account</h2>

      <div class="auth-fields">
        <label class="field-label">
          Full Name
          <input
            class="field-input"
            type="text"
            [(ngModel)]="registerForm.name"
            placeholder="Jane Doe"
            autocomplete="name"
          />
        </label>
        <label class="field-label">
          Email
          <input
            class="field-input"
            type="email"
            [(ngModel)]="registerForm.email"
            placeholder="you@example.com"
            autocomplete="email"
          />
        </label>
        <label class="field-label">
          Password
          <input
            class="field-input"
            type="password"
            [(ngModel)]="registerForm.password"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            autocomplete="new-password"
            (keyup.enter)="register()"
          />
        </label>
      </div>

      <button class="btn-primary auth-submit" [disabled]="loadingAuth()" (click)="register()">
        @if (loadingAuth()) {
          <span class="spinner"></span> Registering\u2026
        } @else {
          Create Account \u2192
        }
      </button>

      <p class="auth-footer-text">
        Already have an account?
        <button class="btn-link" (click)="setAuthMode('login')">Sign in</button>
      </p>
    }

    @if (authError()) {
      <p class="auth-msg auth-msg--error" role="alert">{{ authError() }}</p>
    }
    @if (authSuccess()) {
      <p class="auth-msg auth-msg--success" role="status">{{ authSuccess() }}</p>
    }
  </div>
}
`, styles: ["/* src/app/layout/navbar/navbar.component.css */\n.navbar {\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.navbar-inner {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 14px 24px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 24px;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-mark {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.brand-name {\n  font-family: var(--font-display);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n}\n.search-pill {\n  display: flex;\n  align-items: center;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  overflow: hidden;\n  transition: border-color var(--transition);\n}\n.search-pill:focus-within {\n  border-color: var(--color-accent);\n}\n.search-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  padding: 10px 16px;\n  font-size: 0.95rem;\n  min-width: 0;\n}\n.search-input:focus {\n  outline: none;\n}\n.search-input::placeholder {\n  color: var(--color-text-muted);\n}\n.search-btn {\n  background: transparent;\n  border: none;\n  color: var(--color-text-muted);\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  transition: color var(--transition);\n}\n.search-btn:hover {\n  color: var(--color-accent);\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  white-space: nowrap;\n}\n.user-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-link {\n  border-color: rgba(212, 168, 67, 0.4);\n  color: var(--color-accent);\n  font-size: 0.85rem;\n  padding: 7px 14px;\n}\n.superadmin-link {\n  border-color: rgba(82, 201, 122, 0.4);\n  color: var(--color-success);\n  font-size: 0.85rem;\n  padding: 7px 14px;\n}\n.cart-btn {\n  position: relative;\n  background: transparent;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n  transition: border-color var(--transition), color var(--transition);\n}\n.cart-btn:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.cart-badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: var(--color-accent);\n  color: #0f0f1a;\n  font-size: 0.65rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.sign-out-btn {\n  font-size: 0.9rem;\n  padding: 8px 14px;\n}\n.category-nav {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px 12px;\n  display: flex;\n  gap: 28px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.category-nav::-webkit-scrollbar {\n  display: none;\n}\n.category-nav a {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  transition: color var(--transition);\n  padding-bottom: 2px;\n}\n.category-nav a:hover,\n.category-nav a.active {\n  color: var(--color-accent);\n  border-bottom: 1px solid var(--color-accent);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(2px);\n  z-index: 200;\n}\n.auth-modal {\n  position: fixed;\n  z-index: 201;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(92vw, 440px);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-card);\n}\n.modal-close {\n  position: absolute;\n  top: 16px;\n  right: 18px;\n  background: none;\n  border: none;\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  transition: color var(--transition);\n}\n.modal-close:hover {\n  color: var(--color-text);\n}\n.auth-tabs {\n  display: flex;\n  gap: 4px;\n  background: var(--color-surface-2);\n  border-radius: var(--radius-sm);\n  padding: 4px;\n}\n.auth-tabs button {\n  flex: 1;\n  background: none;\n  border: none;\n  color: var(--color-text-muted);\n  padding: 8px;\n  border-radius: calc(var(--radius-sm) - 2px);\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: background var(--transition), color var(--transition);\n}\n.auth-tabs button.active {\n  background: var(--color-accent);\n  color: #0f0f1a;\n}\n.auth-title {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.auth-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field-label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.auth-submit {\n  width: 100%;\n  padding: 12px;\n  font-size: 1rem;\n}\n.auth-footer-text {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.auth-msg {\n  margin: 0;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.auth-msg--error {\n  background: rgba(224, 82, 82, 0.12);\n  color: var(--color-danger);\n  border: 1px solid rgba(224, 82, 82, 0.3);\n}\n.auth-msg--success {\n  background: rgba(82, 201, 122, 0.12);\n  color: var(--color-success);\n  border: 1px solid rgba(82, 201, 122, 0.3);\n}\n@media (max-width: 768px) {\n  .navbar-inner {\n    grid-template-columns: auto 1fr;\n    padding: 12px 16px;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .nav-actions {\n    grid-column: 1 / -1;\n    justify-content: flex-end;\n  }\n  .user-name {\n    display: none;\n  }\n  .category-nav {\n    padding: 0 16px 10px;\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/layout/navbar/navbar.component.ts", lineNumber: 17 });
})();

// src/app/layout/footer/footer.component.ts
var _c02 = () => ({ category: "new" });
var _c12 = () => ({ category: "fiction" });
var _c22 = () => ({ category: "non-fiction" });
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 46, vars: 7, consts: [[1, "footer"], [1, "footer-inner"], [1, "footer-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "tagline"], ["aria-label", "Footer navigation", 1, "footer-links"], [1, "link-group"], ["routerLink", "/books"], ["routerLink", "/books", 3, "queryParams"], ["routerLink", "/auth/signup"], ["routerLink", "/auth/login"], ["routerLink", "/user/dashboard"], ["routerLink", "/user/purchases"], ["href", "#"], [1, "footer-bottom"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "E-Library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Discover, purchase, and read \u2014 all in one place.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "nav", 6)(10, "div", 7)(11, "h4");
      \u0275\u0275text(12, "Browse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "All Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "New Releases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 9);
      \u0275\u0275text(18, "Fiction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 9);
      \u0275\u0275text(20, "Non-Fiction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 7)(22, "h4");
      \u0275\u0275text(23, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 10);
      \u0275\u0275text(25, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 11);
      \u0275\u0275text(27, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 12);
      \u0275\u0275text(29, "My Library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 13);
      \u0275\u0275text(31, "Purchases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7)(33, "h4");
      \u0275\u0275text(34, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 14);
      \u0275\u0275text(36, "Help Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 14);
      \u0275\u0275text(38, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 14);
      \u0275\u0275text(40, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 14);
      \u0275\u0275text(42, "Contact Us");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 15)(44, "p");
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c02));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(5, _c12));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(6, _c22));
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " E-Library. All rights reserved.");
    }
  }, dependencies: [RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  margin-top: auto;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 48px 24px 32px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 48px;\n  align-items: start;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--color-accent);\n}\n.tagline[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n  max-width: 24ch;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.link-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.link-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 4px;\n}\n.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  transition: color var(--transition);\n}\n.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding: 16px 24px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .footer-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n    padding: 32px 16px 24px;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="brand-mark">\u{1F4DA}</span>
      <span class="brand-name">E-Library</span>
      <p class="tagline">Discover, purchase, and read \u2014 all in one place.</p>
    </div>

    <nav class="footer-links" aria-label="Footer navigation">
      <div class="link-group">
        <h4>Browse</h4>
        <a routerLink="/books">All Books</a>
        <a routerLink="/books" [queryParams]="{category: 'new'}">New Releases</a>
        <a routerLink="/books" [queryParams]="{category: 'fiction'}">Fiction</a>
        <a routerLink="/books" [queryParams]="{category: 'non-fiction'}">Non-Fiction</a>
      </div>
      <div class="link-group">
        <h4>Account</h4>
        <a routerLink="/auth/signup">Register</a>
        <a routerLink="/auth/login">Sign In</a>
        <a routerLink="/user/dashboard">My Library</a>
        <a routerLink="/user/purchases">Purchases</a>
      </div>
      <div class="link-group">
        <h4>Support</h4>
        <a href="#">Help Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  </div>

  <div class="footer-bottom">
    <p>&copy; {{ year }} E-Library. All rights reserved.</p>
  </div>
</footer>
`, styles: ["/* src/app/layout/footer/footer.component.css */\n.footer {\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  margin-top: auto;\n}\n.footer-inner {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 48px 24px 32px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 48px;\n  align-items: start;\n}\n.footer-brand {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.brand-mark {\n  font-size: 2rem;\n  line-height: 1;\n}\n.brand-name {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--color-accent);\n}\n.tagline {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n  max-width: 24ch;\n}\n.footer-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.link-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.link-group h4 {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 4px;\n}\n.link-group a {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  transition: color var(--transition);\n}\n.link-group a:hover {\n  color: var(--color-text);\n}\n.footer-bottom {\n  border-top: 1px solid var(--color-border);\n  padding: 16px 24px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.footer-bottom p {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .footer-inner {\n    grid-template-columns: 1fr;\n    gap: 32px;\n    padding: 32px 16px 24px;\n  }\n  .footer-links {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-main"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: '<app-navbar />\n<main class="app-main">\n  <router-outlet />\n</main>\n<app-footer />\n', styles: ["/* src/app/app.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.app-main {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-MWS2TOSQ.js").then((m) => m.HomeComponent)
  },
  {
    path: "books",
    loadComponent: () => import("./chunk-MWS2TOSQ.js").then((m) => m.HomeComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/interceptors/auth-token.interceptor.ts
var authTokenInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token();
  if (!token) {
    return next(req);
  }
  return next(req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      "X-User-Role": authService.user()?.role || ""
    }
  }));
};

// src/app/interceptors/fake-backend.interceptor.ts
var MOCK_USERS = [
  { id: "u001", name: "Alice Chen", email: "alice@example.com", password: "user123", role: "USER" },
  { id: "u002", name: "Demo User", email: "user@bookshop.local", password: "user123", role: "USER" },
  { id: "a001", name: "Bob Admin", email: "bob@admin.com", password: "admin123", role: "ADMIN" },
  { id: "a002", name: "Demo Admin", email: "admin@elibrary.com", password: "admin123", role: "ADMIN" },
  { id: "sa01", name: "Root Admin", email: "root@elibrary.com", password: "root123", role: "SUPERADMIN" }
];
var cartState = { items: [], subtotal: 0 };
function makeResponse(body, status = 200) {
  return of(new HttpResponse({ status, body })).pipe(delay(250));
}
function calcSubtotal(items) {
  return Number(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0).toFixed(2));
}
function unauthorized(message = "Missing or invalid bearer token.") {
  return throwError(() => new HttpErrorResponse({ status: 401, statusText: "Unauthorized", error: { message } }));
}
function badRequest(message) {
  return throwError(() => new HttpErrorResponse({ status: 400, statusText: "Bad Request", error: { message } }));
}
function hasAuth(req) {
  return req.headers.has("Authorization");
}
function isUrl(req, endpoint) {
  return req.url.startsWith(endpoint);
}
var fakeBackendInterceptor = (req, next) => {
  if (req.method === "POST" && isUrl(req, ApiEndpoints.authLogin)) {
    const { email, password } = req.body;
    const found = MOCK_USERS.find((u) => u.email === email && u.password === password);
    if (!found) {
      return next(req);
    }
    const user = { id: found.id, name: found.name, email: found.email, role: found.role };
    const loginData = {
      accessToken: `mock-token-${found.id}-${Date.now()}`,
      refreshToken: null,
      expiresIn: 3600,
      tokenType: "Bearer",
      user
    };
    const body = {
      data: loginData,
      meta: { timestamp: (/* @__PURE__ */ new Date()).toISOString(), traceId: "mock" }
    };
    return makeResponse(body);
  }
  if (req.method === "POST" && isUrl(req, ApiEndpoints.authRegister)) {
    const { email } = req.body;
    if (MOCK_USERS.find((u) => u.email === email)) {
      return badRequest("Email already registered.");
    }
    return next(req);
  }
  if (isUrl(req, ApiEndpoints.cart) || isUrl(req, ApiEndpoints.checkout)) {
    if (!hasAuth(req)) {
      return unauthorized();
    }
  }
  if (req.method === "GET" && req.url === ApiEndpoints.cart) {
    return makeResponse(cartState);
  }
  if (req.method === "POST" && req.url === ApiEndpoints.cartItems) {
    const payload = req.body;
    if (!payload.bookId || payload.quantity < 1) {
      return badRequest("Invalid cart payload.");
    }
    const existing = cartState.items.find((item) => item.bookId === payload.bookId);
    if (existing) {
      existing.quantity += payload.quantity;
    } else {
      cartState.items.push({
        bookId: payload.bookId,
        title: `Book ${payload.bookId.substring(0, 8)}`,
        unitPrice: 10,
        quantity: payload.quantity
      });
    }
    cartState = { items: [...cartState.items], subtotal: calcSubtotal(cartState.items) };
    return makeResponse(cartState, 201);
  }
  if (req.method === "POST" && isUrl(req, ApiEndpoints.checkout)) {
    const payload = req.body;
    if (!cartState.items.length) {
      return badRequest("Cart is empty.");
    }
    if (!payload.shippingAddress?.trim()) {
      return badRequest("Shipping address is required.");
    }
    const response = {
      orderId: `ord-${Date.now()}`,
      status: "PAID",
      totalAmount: cartState.subtotal
    };
    cartState = { items: [], subtotal: 0 };
    return makeResponse(response, 201);
  }
  return next(req);
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authTokenInterceptor, fakeBackendInterceptor]))
  ]
}).catch((error) => console.error(error));
//# sourceMappingURL=main.js.map
