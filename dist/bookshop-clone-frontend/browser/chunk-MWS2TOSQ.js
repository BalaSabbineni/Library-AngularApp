import {
  ActivatedRoute,
  ApiEndpoints,
  AuthService,
  CartService,
  CommonModule,
  Component,
  DefaultValueAccessor,
  DomSanitizer,
  FormsModule,
  HttpClient,
  Injectable,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  Router,
  SelectControlValueAccessor,
  __spreadProps,
  __spreadValues,
  environment,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HSIE7PRS.js";

// src/app/services/books.service.ts
var BooksService = class _BooksService {
  http;
  constructor(http) {
    this.http = http;
  }
  list(search = "") {
    return this.http.get(ApiEndpoints.books).pipe(map((response) => {
      const mappedItems = response.data.map((book) => this.mapBook(book)).filter((book) => {
        if (!search.trim()) {
          return true;
        }
        const term = search.toLowerCase();
        return [book.title, book.author, book.isbn || "", book.category, book.description].join(" ").toLowerCase().includes(term);
      });
      const payload = {
        items: mappedItems,
        page: 0,
        size: mappedItems.length,
        total: mappedItems.length
      };
      return payload;
    }));
  }
  uploadBook(payload) {
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("author", payload.author);
    formData.append("isbn", payload.isbn);
    formData.append("publisher", payload.publisher);
    formData.append("publishedDate", payload.publishedDate);
    formData.append("category", payload.category);
    formData.append("language", payload.language);
    formData.append("pageCount", String(payload.pageCount));
    formData.append("price", String(payload.price));
    formData.append("currency", payload.currency);
    formData.append("active", String(payload.active));
    formData.append("inStock", String(payload.inStock));
    formData.append("description", payload.description);
    formData.append("pdfStorageType", payload.pdfStorageType);
    formData.append("pdfFile", payload.pdfFile);
    return this.http.post(ApiEndpoints.books, formData).pipe(map((response) => this.mapBook(response.data)));
  }
  getPdfBlob(bookId) {
    return this.http.get(`${ApiEndpoints.books}/${bookId}/pdf`, { responseType: "blob" });
  }
  mapBook(book) {
    const apiOrigin = new URL(environment.apiBaseUrl).origin;
    const pdfUrl = book.pdfDownloadUrl ? book.pdfDownloadUrl.startsWith("http") ? book.pdfDownloadUrl : `${apiOrigin}${book.pdfDownloadUrl}` : void 0;
    return {
      id: book.id,
      title: book.name,
      author: book.author,
      isbn: book.isbn,
      coverUrl: book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` : void 0,
      price: Number(book.price),
      category: book.category,
      description: book.description || "",
      inStock: book.inStock,
      pdfDownloadUrl: pdfUrl
    };
  }
  static \u0275fac = function BooksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooksService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BooksService, factory: _BooksService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooksService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/home/home.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.bookId;
function HomeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, " Already a member? Your library awaits. ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function HomeComponent_For_30_Template_button_click_0_listener() {
      const shelf_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.searchTerm.set(shelf_r2);
      return \u0275\u0275resetView(ctx_r2.onSearch());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shelf_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(shelf_r2);
  }
}
function HomeComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusMessage());
  }
}
function HomeComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function HomeComponent_Conditional_33_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
    \u0275\u0275text(1, " Uploading\u2026 ");
  }
}
function HomeComponent_Conditional_33_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Upload Book PDF ");
  }
}
function HomeComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 24)(1, "h2", 27);
    \u0275\u0275text(2, "Upload Book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "label", 35);
    \u0275\u0275text(5, "Title ");
    \u0275\u0275elementStart(6, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.name, $event) || (ctx_r2.uploadForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 35);
    \u0275\u0275text(8, "Author ");
    \u0275\u0275elementStart(9, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.author, $event) || (ctx_r2.uploadForm.author = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 35);
    \u0275\u0275text(11, "ISBN ");
    \u0275\u0275elementStart(12, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.isbn, $event) || (ctx_r2.uploadForm.isbn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 35);
    \u0275\u0275text(14, "Publisher ");
    \u0275\u0275elementStart(15, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.publisher, $event) || (ctx_r2.uploadForm.publisher = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 35);
    \u0275\u0275text(17, "Published Date ");
    \u0275\u0275elementStart(18, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.publishedDate, $event) || (ctx_r2.uploadForm.publishedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 35);
    \u0275\u0275text(20, "Category ");
    \u0275\u0275elementStart(21, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.category, $event) || (ctx_r2.uploadForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 35);
    \u0275\u0275text(23, "Language ");
    \u0275\u0275elementStart(24, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.language, $event) || (ctx_r2.uploadForm.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label", 35);
    \u0275\u0275text(26, "Pages ");
    \u0275\u0275elementStart(27, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.pageCount, $event) || (ctx_r2.uploadForm.pageCount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "label", 35);
    \u0275\u0275text(29, "Price ($) ");
    \u0275\u0275elementStart(30, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.price, $event) || (ctx_r2.uploadForm.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 35);
    \u0275\u0275text(32, "Currency ");
    \u0275\u0275elementStart(33, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.currency, $event) || (ctx_r2.uploadForm.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 35);
    \u0275\u0275text(35, "Storage ");
    \u0275\u0275elementStart(36, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.pdfStorageType, $event) || (ctx_r2.uploadForm.pdfStorageType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 42);
    \u0275\u0275text(38, "DATABASE_BLOB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 43);
    \u0275\u0275text(40, "FILE_SYSTEM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 44);
    \u0275\u0275text(42, "OBJECT_STORAGE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "label", 35);
    \u0275\u0275text(44, "PDF File ");
    \u0275\u0275elementStart(45, "input", 45);
    \u0275\u0275listener("change", function HomeComponent_Conditional_33_Template_input_change_45_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPdfSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "label", 46);
    \u0275\u0275text(47, "Description ");
    \u0275\u0275elementStart(48, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_33_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadForm.description, $event) || (ctx_r2.uploadForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 47);
    \u0275\u0275listener("click", function HomeComponent_Conditional_33_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.uploadBook());
    });
    \u0275\u0275template(50, HomeComponent_Conditional_33_Conditional_50_Template, 2, 0)(51, HomeComponent_Conditional_33_Conditional_51_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.author);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.isbn);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.publisher);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.publishedDate);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.category);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.language);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.pageCount);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.price);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.currency);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.pdfStorageType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadForm.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.uploadingBook());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.uploadingBook() ? 50 : 51);
  }
}
function HomeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(' Results for "', ctx_r2.searchTerm(), '" ');
  }
}
function HomeComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " All Books ");
  }
}
function HomeComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r2.books().length, " books ");
  }
}
function HomeComponent_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 50)(2, "div", 51)(3, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_41_For_2_Template, 4, 0, "div", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HomeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p", 53);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4, "No books found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 55);
    \u0275\u0275text(6, "Try a different search term.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const book_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", book_r6.coverUrl, \u0275\u0275sanitizeUrl)("alt", "Cover of " + book_r6.title + " by " + book_r6.author);
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r6.title);
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function HomeComponent_Conditional_43_For_2_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const book_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPdfReader(book_r6));
    });
    \u0275\u0275text(1, "Read");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 56)(1, "div", 57);
    \u0275\u0275template(2, HomeComponent_Conditional_43_For_2_Conditional_2_Template, 1, 2, "img", 58)(3, HomeComponent_Conditional_43_For_2_Conditional_3_Template, 3, 1, "div", 59);
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "h3", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 64)(12, "strong", 65);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 66)(15, "button", 67);
    \u0275\u0275listener("click", function HomeComponent_Conditional_43_For_2_Template_button_click_15_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(book_r6.id, book_r6));
    });
    \u0275\u0275text(16, "Add to Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, HomeComponent_Conditional_43_For_2_Conditional_17_Template, 2, 0, "button", 68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const book_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(book_r6.coverUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r6.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r6.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", book_r6.price.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.authService.isLoggedIn())("title", ctx_r2.authService.isLoggedIn() ? "Add to cart" : "Sign in to purchase");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(book_r6.pdfDownloadUrl ? 17 : -1);
  }
}
function HomeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_43_For_2_Template, 18, 8, "article", 56, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.books());
  }
}
function HomeComponent_Conditional_44_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7", item_r9.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (item_r9.quantity * item_r9.unitPrice).toFixed(2), "");
  }
}
function HomeComponent_Conditional_44_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
    \u0275\u0275text(1, " Processing\u2026 ");
  }
}
function HomeComponent_Conditional_44_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Checkout \u2192 ");
  }
}
function HomeComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "h2", 27);
    \u0275\u0275text(2, "My Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 70);
    \u0275\u0275repeaterCreate(4, HomeComponent_Conditional_44_For_5_Template, 7, 3, "li", 71, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72)(7, "label", 73);
    \u0275\u0275text(8, " Shipping Address ");
    \u0275\u0275elementStart(9, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Conditional_44_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.shippingAddress, $event) || (ctx_r2.shippingAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74)(11, "strong", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 76);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkout());
    });
    \u0275\u0275template(14, HomeComponent_Conditional_44_Conditional_14_Template, 2, 0)(15, HomeComponent_Conditional_44_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.cart.items);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.shippingAddress);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total: $", ctx_r2.cart.subtotal.toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.checkingOut() || !ctx_r2.cart.items.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.checkingOut() ? 14 : 15);
  }
}
function HomeComponent_Conditional_45_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Loading PDF\u2026");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_45_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pdfReaderError());
  }
}
function HomeComponent_Conditional_45_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 86);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.selectedPdfUrl(), \u0275\u0275sanitizeResourceUrl);
  }
}
function HomeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275listener("click", function HomeComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePdfReader());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 81)(2, "div", 82)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 83);
    \u0275\u0275listener("click", function HomeComponent_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePdfReader());
    });
    \u0275\u0275text(6, "\u2190 Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HomeComponent_Conditional_45_Conditional_7_Template, 3, 0, "div", 84)(8, HomeComponent_Conditional_45_Conditional_8_Template, 2, 1, "div", 85)(9, HomeComponent_Conditional_45_Conditional_9_Template, 1, 1, "iframe", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Reading: " + ctx_r2.selectedPdfTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPdfTitle());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.loadingPdf() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pdfReaderError() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedPdfUrl() && !ctx_r2.loadingPdf() && !ctx_r2.pdfReaderError() ? 9 : -1);
  }
}
var HomeComponent = class _HomeComponent {
  authService = inject(AuthService);
  booksService = inject(BooksService);
  cartService = inject(CartService);
  sanitizer = inject(DomSanitizer);
  route = inject(ActivatedRoute);
  router = inject(Router);
  shelves = ["Bestsellers", "Staff Picks", "New Releases", "Award Winners", "Kids & YA", "Indie Press"];
  searchTerm = signal("");
  books = signal([]);
  loadingBooks = signal(false);
  statusMessage = signal("");
  errorMessage = signal("");
  // PDF reader
  showPdfReader = signal(false);
  selectedPdfUrl = signal(null);
  selectedPdfTitle = signal("");
  loadingPdf = signal(false);
  pdfReaderError = signal("");
  selectedPdfObjectUrl = null;
  // Admin upload form
  uploadForm = {
    name: "",
    author: "",
    isbn: "",
    publisher: "",
    publishedDate: "",
    category: "General",
    language: "English",
    pageCount: 100,
    price: 9.99,
    currency: "USD",
    active: true,
    inStock: true,
    description: "",
    pdfStorageType: "DATABASE_BLOB"
  };
  uploadPdfFile = null;
  uploadingBook = signal(false);
  // Cart
  shippingAddress = "221B Baker Street, London";
  loadingCart = signal(false);
  checkingOut = signal(false);
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const q = params["q"] || "";
      this.searchTerm.set(q);
      this.loadBooks(q);
    });
  }
  onSearch() {
    const q = this.searchTerm().trim();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: q ? { q } : {},
      queryParamsHandling: ""
    });
  }
  loadBooks(search = "") {
    this.loadingBooks.set(true);
    this.clearMessages();
    this.booksService.list(search).subscribe({
      next: (res) => {
        this.books.set(res.items);
        this.loadingBooks.set(false);
      },
      error: (err) => {
        this.loadingBooks.set(false);
        this.errorMessage.set(err?.error?.message || "Failed to load books.");
      }
    });
  }
  addToCart(bookId, book) {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set("Please sign in to add books to your cart.");
      return;
    }
    this.clearMessages();
    this.cartService.addItem({ bookId, quantity: 1 }, book).subscribe({
      next: () => {
        this.statusMessage.set("Added to cart.");
        setTimeout(() => this.statusMessage.set(""), 2500);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || "Unable to add to cart.");
      }
    });
  }
  checkout() {
    this.clearMessages();
    this.checkingOut.set(true);
    this.cartService.checkout({ paymentMethod: "CARD", shippingAddress: this.shippingAddress }).subscribe({
      next: (res) => {
        this.checkingOut.set(false);
        this.statusMessage.set(`Order ${res.orderId} placed! Total: $${res.totalAmount.toFixed(2)}`);
        this.cartService.clearLocalCart();
      },
      error: (err) => {
        this.checkingOut.set(false);
        this.errorMessage.set(err?.error?.message || "Checkout failed.");
      }
    });
  }
  canUploadBooks() {
    const role = this.authService.user()?.role;
    return role === "ADMIN" || role === "SUPERADMIN";
  }
  onPdfSelected(event) {
    const input = event.target;
    this.uploadPdfFile = input.files?.[0] || null;
  }
  uploadBook() {
    if (!this.uploadPdfFile) {
      this.errorMessage.set("Please select a PDF file.");
      return;
    }
    this.clearMessages();
    this.uploadingBook.set(true);
    const payload = __spreadProps(__spreadValues({}, this.uploadForm), { pdfFile: this.uploadPdfFile });
    this.booksService.uploadBook(payload).subscribe({
      next: () => {
        this.uploadingBook.set(false);
        this.statusMessage.set("Book uploaded successfully.");
        this.uploadPdfFile = null;
        this.loadBooks(this.searchTerm());
      },
      error: (err) => {
        this.uploadingBook.set(false);
        this.errorMessage.set(err?.error?.message || "Upload failed.");
      }
    });
  }
  openPdfReader(book) {
    if (!book.pdfDownloadUrl) {
      this.errorMessage.set("PDF not available for this book.");
      return;
    }
    this.releasePdfObjectUrl();
    this.selectedPdfTitle.set(book.title);
    this.loadingPdf.set(true);
    this.pdfReaderError.set("");
    this.showPdfReader.set(true);
    this.booksService.getPdfBlob(book.id).subscribe({
      next: (blob) => {
        this.loadingPdf.set(false);
        const pdfBlob = blob.type === "application/pdf" ? blob : new Blob([blob], { type: "application/pdf" });
        this.selectedPdfObjectUrl = URL.createObjectURL(pdfBlob);
        this.selectedPdfUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPdfObjectUrl));
      },
      error: () => {
        this.loadingPdf.set(false);
        this.pdfReaderError.set("Unable to load PDF.");
      }
    });
  }
  closePdfReader() {
    this.showPdfReader.set(false);
    this.selectedPdfUrl.set(null);
    this.selectedPdfTitle.set("");
    this.loadingPdf.set(false);
    this.pdfReaderError.set("");
    this.releasePdfObjectUrl();
  }
  get cart() {
    return this.cartService.cart();
  }
  clearMessages() {
    this.errorMessage.set("");
    this.statusMessage.set("");
  }
  releasePdfObjectUrl() {
    if (this.selectedPdfObjectUrl) {
      URL.revokeObjectURL(this.selectedPdfObjectUrl);
      this.selectedPdfObjectUrl = null;
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 46, vars: 10, consts: [[1, "home-page"], [1, "hero"], [1, "hero-content"], [1, "eyebrow", "label"], [1, "hero-title", "display-xl"], [1, "accent-text"], [1, "hero-sub", "body-lg"], [1, "hero-actions"], [1, "btn-primary", 3, "click"], [1, "hero-cta-note", "text-muted"], ["aria-hidden", "true", 1, "hero-visual"], [1, "book-stack"], [1, "book-spine", "spine-1"], [1, "book-spine", "spine-2"], [1, "book-spine", "spine-3"], [1, "book-spine", "spine-4"], [1, "book-spine", "spine-5"], [1, "search-section"], [1, "search-bar"], ["type", "text", "placeholder", "Search by title, author, ISBN, or category\u2026", "aria-label", "Search books", 1, "field-input", "search-field", 3, "input", "keyup.enter", "value"], [1, "shelves"], [1, "shelf-chip"], ["role", "status", 1, "message", "message--success"], ["role", "alert", 1, "message", "message--error"], [1, "admin-upload", "surface"], [1, "catalog-section"], [1, "section-header"], [1, "section-heading"], [1, "result-count", "text-muted"], [1, "book-grid", "skeleton-grid"], [1, "empty-state"], [1, "book-grid"], [1, "cart-summary", "surface"], [1, "shelf-chip", 3, "click"], [1, "upload-grid"], [1, "field-label"], ["type", "text", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "min", "0", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "3", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "field-input", 3, "ngModelChange", "ngModel"], ["value", "DATABASE_BLOB"], ["value", "FILE_SYSTEM"], ["value", "OBJECT_STORAGE"], ["type", "file", "accept", "application/pdf", 3, "change"], [1, "field-label", 2, "margin-top", "10px"], [1, "btn-primary", "upload-btn", 3, "click", "disabled"], [1, "spinner"], [1, "book-card", "skeleton-card"], [1, "cover-shell", "skeleton-cover"], [1, "skeleton-line"], [1, "skeleton-line", "short"], [1, "display-lg"], [1, "heading-md"], [1, "text-muted"], [1, "book-card"], [1, "cover-shell"], ["loading", "lazy", 1, "cover-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "cover-fallback"], [1, "category-badge"], [1, "card-body"], [1, "book-title"], [1, "book-author", "text-muted"], [1, "card-footer"], [1, "book-price"], [1, "card-actions"], [1, "btn-primary", "add-cart-btn", 3, "click", "disabled", "title"], [1, "btn-ghost", "read-btn"], [1, "btn-ghost", "read-btn", 3, "click"], [1, "cart-list"], [1, "cart-item"], [1, "cart-footer"], [1, "field-label", "shipping-label"], [1, "cart-total-row"], [1, "cart-total"], [1, "btn-primary", "checkout-btn", 3, "click", "disabled"], [1, "cart-item-title"], [1, "cart-item-qty", "text-muted"], [1, "cart-item-price"], ["role", "presentation", 1, "pdf-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "pdf-modal"], [1, "pdf-modal-header"], [1, "btn-ghost", 3, "click"], [1, "pdf-state"], [1, "pdf-state", "text-danger"], ["title", "Book PDF Reader", 1, "pdf-frame", 3, "src"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "Your Digital Library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Stories that");
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "move you");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, " Discover thousands of books. Purchase instantly. Read anywhere \u2014 no shipping required. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
        return ctx.loadBooks();
      });
      \u0275\u0275text(14, "Browse Catalog");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, HomeComponent_Conditional_15_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
      \u0275\u0275element(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "section", 17)(24, "div", 18)(25, "input", 19);
      \u0275\u0275listener("input", function HomeComponent_Template_input_input_25_listener($event) {
        return ctx.searchTerm.set($event.target.value);
      })("keyup.enter", function HomeComponent_Template_input_keyup_enter_25_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 8);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_26_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(27, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275repeaterCreate(29, HomeComponent_For_30_Template, 2, 1, "button", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, HomeComponent_Conditional_31_Template, 2, 1, "div", 22)(32, HomeComponent_Conditional_32_Template, 2, 1, "div", 23)(33, HomeComponent_Conditional_33_Template, 52, 14, "section", 24);
      \u0275\u0275elementStart(34, "section", 25)(35, "div", 26)(36, "h2", 27);
      \u0275\u0275template(37, HomeComponent_Conditional_37_Template, 1, 1)(38, HomeComponent_Conditional_38_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 28);
      \u0275\u0275template(40, HomeComponent_Conditional_40_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, HomeComponent_Conditional_41_Template, 3, 1, "div", 29)(42, HomeComponent_Conditional_42_Template, 7, 0, "div", 30)(43, HomeComponent_Conditional_43_Template, 3, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, HomeComponent_Conditional_44_Template, 16, 4, "section", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, HomeComponent_Conditional_45_Template, 10, 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(!ctx.authService.isLoggedIn() ? 15 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.shelves);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canUploadBooks() ? 33 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.searchTerm() ? 37 : 38);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.loadingBooks() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingBooks() ? 41 : ctx.books().length === 0 ? 42 : 43);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.authService.isLoggedIn() && ctx.cart.items.length > 0 ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPdfReader() ? 45 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel], styles: ["\n\n.home-page[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 48px;\n  padding: 64px 0 32px;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.hero-title[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  letter-spacing: -0.02em;\n}\n.accent-text[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  max-width: 52ch;\n  margin: 0;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-top: 6px;\n}\n.hero-cta-note[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.book-stack[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n}\n.book-spine[_ngcontent-%COMP%] {\n  width: 38px;\n  border-radius: 4px 4px 0 0;\n  opacity: 0.85;\n}\n.spine-1[_ngcontent-%COMP%] {\n  height: 180px;\n  background:\n    linear-gradient(\n      180deg,\n      #d4a843,\n      #a07830);\n}\n.spine-2[_ngcontent-%COMP%] {\n  height: 220px;\n  background:\n    linear-gradient(\n      180deg,\n      #4a5568,\n      #2d3748);\n  border: 1px solid rgba(212, 168, 67, 0.3);\n}\n.spine-3[_ngcontent-%COMP%] {\n  height: 160px;\n  background:\n    linear-gradient(\n      180deg,\n      #2b4c7e,\n      #1a3a6e);\n}\n.spine-4[_ngcontent-%COMP%] {\n  height: 240px;\n  background:\n    linear-gradient(\n      180deg,\n      #553c9a,\n      #3d2b7e);\n}\n.spine-5[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      180deg,\n      #22223b,\n      #1a1a2e);\n  border: 1px solid rgba(212, 168, 67, 0.2);\n}\n.search-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  max-width: 680px;\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.shelves[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.shelf-chip[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  color: var(--color-text-muted);\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition:\n    background var(--transition),\n    color var(--transition),\n    border-color var(--transition);\n}\n.shelf-chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface);\n  color: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.message[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.message--success[_ngcontent-%COMP%] {\n  background: rgba(82, 201, 122, 0.1);\n  color: var(--color-success);\n  border: 1px solid rgba(82, 201, 122, 0.3);\n}\n.message--error[_ngcontent-%COMP%] {\n  background: rgba(224, 82, 82, 0.1);\n  color: var(--color-danger);\n  border: 1px solid rgba(224, 82, 82, 0.3);\n}\n.admin-upload[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.upload-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.catalog-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.result-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.book-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 24px;\n}\n.book-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform var(--transition),\n    box-shadow var(--transition),\n    border-color var(--transition);\n  box-shadow: var(--shadow-card);\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-hover);\n  border-color: rgba(212, 168, 67, 0.4);\n}\n.cover-shell[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--color-surface-2);\n}\n.cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition);\n}\n.book-card[_ngcontent-%COMP%]:hover   .cover-img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.cover-fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 16px;\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface-2),\n      #1c1c38);\n}\n.category-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(15, 15, 26, 0.85);\n  color: var(--color-accent);\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 999px;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.book-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.book-author[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin: 0;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: auto;\n  padding-top: 12px;\n}\n.book-price[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--color-accent);\n  font-weight: 700;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.add-cart-btn[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.read-btn[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: 0.82rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.skeleton-cover[_ngcontent-%COMP%] {\n  aspect-ratio: 3 / 4;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-2) 25%,\n      var(--color-surface) 50%,\n      var(--color-surface-2) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n  margin: 10px 16px 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-2) 25%,\n      var(--color-surface) 50%,\n      var(--color-surface-2) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skeleton-line.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  to {\n    background-position: -200% 0;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .display-lg[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.cart-summary[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.cart-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 16px 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.cart-item-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n}\n.cart-item-qty[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.cart-item-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n.cart-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 16px;\n}\n.shipping-label[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.cart-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cart-total[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--color-text);\n}\n.checkout-btn[_ngcontent-%COMP%] {\n  padding: 11px 24px;\n}\n.pdf-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(3px);\n  z-index: 300;\n}\n.pdf-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 301;\n  top: 3vh;\n  left: 50%;\n  transform: translateX(-50%);\n  width: min(96vw, 1200px);\n  height: 94vh;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  box-shadow: var(--shadow-card);\n}\n.pdf-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.pdf-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.pdf-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  height: 100%;\n  font-weight: 600;\n}\n.pdf-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n@media (max-width: 900px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 40px 0 16px;\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .home-page[_ngcontent-%COMP%] {\n    padding: 0 16px 40px;\n    gap: 32px;\n  }\n  .book-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 14px;\n  }\n  .card-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .cart-total-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="home-page">

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <p class="eyebrow label">Your Digital Library</p>
      <h1 class="hero-title display-xl">Stories that<br><span class="accent-text">move you</span></h1>
      <p class="hero-sub body-lg">
        Discover thousands of books. Purchase instantly. Read anywhere \u2014 no shipping required.
      </p>
      <div class="hero-actions">
        <button class="btn-primary" (click)="loadBooks()">Browse Catalog</button>
        @if (!authService.isLoggedIn()) {
          <span class="hero-cta-note text-muted">
            Already a member? Your library awaits.
          </span>
        }
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="book-stack">
        <div class="book-spine spine-1"></div>
        <div class="book-spine spine-2"></div>
        <div class="book-spine spine-3"></div>
        <div class="book-spine spine-4"></div>
        <div class="book-spine spine-5"></div>
      </div>
    </div>
  </section>

  <!-- Search & Filter -->
  <section class="search-section">
    <div class="search-bar">
      <input
        class="field-input search-field"
        type="text"
        [value]="searchTerm()"
        (input)="searchTerm.set($any($event.target).value)"
        (keyup.enter)="onSearch()"
        placeholder="Search by title, author, ISBN, or category\u2026"
        aria-label="Search books"
      />
      <button class="btn-primary" (click)="onSearch()">Search</button>
    </div>
    <div class="shelves">
      @for (shelf of shelves; track shelf) {
        <button class="shelf-chip" (click)="searchTerm.set(shelf); onSearch()">{{ shelf }}</button>
      }
    </div>
  </section>

  <!-- Status Messages -->
  @if (statusMessage()) {
    <div class="message message--success" role="status">{{ statusMessage() }}</div>
  }
  @if (errorMessage()) {
    <div class="message message--error" role="alert">{{ errorMessage() }}</div>
  }

  <!-- Admin Upload Form -->
  @if (canUploadBooks()) {
    <section class="admin-upload surface">
      <h2 class="section-heading">Upload Book</h2>
      <div class="upload-grid">
        <label class="field-label">Title <input class="field-input" [(ngModel)]="uploadForm.name" type="text" /></label>
        <label class="field-label">Author <input class="field-input" [(ngModel)]="uploadForm.author" type="text" /></label>
        <label class="field-label">ISBN <input class="field-input" [(ngModel)]="uploadForm.isbn" type="text" /></label>
        <label class="field-label">Publisher <input class="field-input" [(ngModel)]="uploadForm.publisher" type="text" /></label>
        <label class="field-label">Published Date <input class="field-input" [(ngModel)]="uploadForm.publishedDate" type="date" /></label>
        <label class="field-label">Category <input class="field-input" [(ngModel)]="uploadForm.category" type="text" /></label>
        <label class="field-label">Language <input class="field-input" [(ngModel)]="uploadForm.language" type="text" /></label>
        <label class="field-label">Pages <input class="field-input" [(ngModel)]="uploadForm.pageCount" type="number" min="1" /></label>
        <label class="field-label">Price ($) <input class="field-input" [(ngModel)]="uploadForm.price" type="number" step="0.01" min="0" /></label>
        <label class="field-label">Currency <input class="field-input" [(ngModel)]="uploadForm.currency" type="text" maxlength="3" /></label>
        <label class="field-label">Storage
          <select class="field-input" [(ngModel)]="uploadForm.pdfStorageType">
            <option value="DATABASE_BLOB">DATABASE_BLOB</option>
            <option value="FILE_SYSTEM">FILE_SYSTEM</option>
            <option value="OBJECT_STORAGE">OBJECT_STORAGE</option>
          </select>
        </label>
        <label class="field-label">PDF File <input type="file" accept="application/pdf" (change)="onPdfSelected($event)" /></label>
      </div>
      <label class="field-label" style="margin-top:10px">Description
        <input class="field-input" [(ngModel)]="uploadForm.description" type="text" />
      </label>
      <button class="btn-primary upload-btn" [disabled]="uploadingBook()" (click)="uploadBook()">
        @if (uploadingBook()) { <span class="spinner"></span> Uploading\u2026 } @else { Upload Book PDF }
      </button>
    </section>
  }

  <!-- Book Grid -->
  <section class="catalog-section">
    <div class="section-header">
      <h2 class="section-heading">
        @if (searchTerm()) { Results for "{{ searchTerm() }}" } @else { All Books }
      </h2>
      <span class="result-count text-muted">
        @if (!loadingBooks()) { {{ books().length }} books }
      </span>
    </div>

    @if (loadingBooks()) {
      <div class="book-grid skeleton-grid">
        @for (n of [1,2,3,4,5,6,7,8]; track n) {
          <div class="book-card skeleton-card">
            <div class="cover-shell skeleton-cover"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line short"></div>
          </div>
        }
      </div>
    } @else if (books().length === 0) {
      <div class="empty-state">
        <p class="display-lg">\u{1F4DA}</p>
        <p class="heading-md">No books found</p>
        <p class="text-muted">Try a different search term.</p>
      </div>
    } @else {
      <div class="book-grid">
        @for (book of books(); track book.id) {
          <article class="book-card">
            <div class="cover-shell">
              @if (book.coverUrl) {
                <img
                  [src]="book.coverUrl"
                  [alt]="'Cover of ' + book.title + ' by ' + book.author"
                  class="cover-img"
                  loading="lazy"
                />
              } @else {
                <div class="cover-fallback" aria-hidden="true">
                  <span>{{ book.title }}</span>
                </div>
              }
              <span class="category-badge">{{ book.category }}</span>
            </div>
            <div class="card-body">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-author text-muted">{{ book.author }}</p>
              <div class="card-footer">
                <strong class="book-price">\${{ book.price.toFixed(2) }}</strong>
                <div class="card-actions">
                  <button
                    class="btn-primary add-cart-btn"
                    [disabled]="!authService.isLoggedIn()"
                    (click)="addToCart(book.id, book)"
                    [title]="authService.isLoggedIn() ? 'Add to cart' : 'Sign in to purchase'"
                  >Add to Cart</button>
                  @if (book.pdfDownloadUrl) {
                    <button class="btn-ghost read-btn" (click)="openPdfReader(book)">Read</button>
                  }
                </div>
              </div>
            </div>
          </article>
        }
      </div>
    }
  </section>

  <!-- Cart Summary (inline for Phase 1, will become drawer in Phase 3) -->
  @if (authService.isLoggedIn() && cart.items.length > 0) {
    <section class="cart-summary surface">
      <h2 class="section-heading">My Cart</h2>
      <ul class="cart-list">
        @for (item of cart.items; track item.bookId) {
          <li class="cart-item">
            <span class="cart-item-title">{{ item.title }}</span>
            <span class="cart-item-qty text-muted">\xD7{{ item.quantity }}</span>
            <span class="cart-item-price">\${{ (item.quantity * item.unitPrice).toFixed(2) }}</span>
          </li>
        }
      </ul>
      <div class="cart-footer">
        <label class="field-label shipping-label">
          Shipping Address
          <input class="field-input" [(ngModel)]="shippingAddress" type="text" />
        </label>
        <div class="cart-total-row">
          <strong class="cart-total">Total: \${{ cart.subtotal.toFixed(2) }}</strong>
          <button
            class="btn-primary checkout-btn"
            [disabled]="checkingOut() || !cart.items.length"
            (click)="checkout()"
          >
            @if (checkingOut()) { <span class="spinner"></span> Processing\u2026 } @else { Checkout \u2192 }
          </button>
        </div>
      </div>
    </section>
  }

</div>

<!-- PDF Reader Modal -->
@if (showPdfReader()) {
  <div class="pdf-backdrop" (click)="closePdfReader()" role="presentation"></div>
  <div class="pdf-modal" role="dialog" aria-modal="true" [attr.aria-label]="'Reading: ' + selectedPdfTitle()">
    <div class="pdf-modal-header">
      <h3>{{ selectedPdfTitle() }}</h3>
      <button class="btn-ghost" (click)="closePdfReader()">\u2190 Back</button>
    </div>
    @if (loadingPdf()) {
      <div class="pdf-state"><span class="spinner"></span> Loading PDF\u2026</div>
    }
    @if (pdfReaderError()) {
      <div class="pdf-state text-danger">{{ pdfReaderError() }}</div>
    }
    @if (selectedPdfUrl() && !loadingPdf() && !pdfReaderError()) {
      <iframe [src]="selectedPdfUrl()" title="Book PDF Reader" class="pdf-frame"></iframe>
    }
  </div>
}
`, styles: ["/* src/app/pages/home/home.component.css */\n.home-page {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n.hero {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 48px;\n  padding: 64px 0 32px;\n}\n.hero-content {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.eyebrow {\n  color: var(--color-accent);\n}\n.hero-title {\n  color: var(--color-text);\n  letter-spacing: -0.02em;\n}\n.accent-text {\n  color: var(--color-accent);\n}\n.hero-sub {\n  color: var(--color-text-muted);\n  max-width: 52ch;\n  margin: 0;\n}\n.hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-top: 6px;\n}\n.hero-cta-note {\n  font-size: 0.875rem;\n}\n.hero-visual {\n  display: flex;\n  align-items: flex-end;\n}\n.book-stack {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n}\n.book-spine {\n  width: 38px;\n  border-radius: 4px 4px 0 0;\n  opacity: 0.85;\n}\n.spine-1 {\n  height: 180px;\n  background:\n    linear-gradient(\n      180deg,\n      #d4a843,\n      #a07830);\n}\n.spine-2 {\n  height: 220px;\n  background:\n    linear-gradient(\n      180deg,\n      #4a5568,\n      #2d3748);\n  border: 1px solid rgba(212, 168, 67, 0.3);\n}\n.spine-3 {\n  height: 160px;\n  background:\n    linear-gradient(\n      180deg,\n      #2b4c7e,\n      #1a3a6e);\n}\n.spine-4 {\n  height: 240px;\n  background:\n    linear-gradient(\n      180deg,\n      #553c9a,\n      #3d2b7e);\n}\n.spine-5 {\n  height: 200px;\n  background:\n    linear-gradient(\n      180deg,\n      #22223b,\n      #1a1a2e);\n  border: 1px solid rgba(212, 168, 67, 0.2);\n}\n.search-section {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.search-bar {\n  display: flex;\n  gap: 10px;\n  max-width: 680px;\n}\n.search-field {\n  flex: 1;\n}\n.shelves {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.shelf-chip {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  color: var(--color-text-muted);\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition:\n    background var(--transition),\n    color var(--transition),\n    border-color var(--transition);\n}\n.shelf-chip:hover {\n  background: var(--color-surface);\n  color: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.message {\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.message--success {\n  background: rgba(82, 201, 122, 0.1);\n  color: var(--color-success);\n  border: 1px solid rgba(82, 201, 122, 0.3);\n}\n.message--error {\n  background: rgba(224, 82, 82, 0.1);\n  color: var(--color-danger);\n  border: 1px solid rgba(224, 82, 82, 0.3);\n}\n.admin-upload {\n  padding: 28px;\n}\n.upload-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.upload-btn {\n  margin-top: 16px;\n}\n.catalog-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-header {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.section-heading {\n  font-size: 1.8rem;\n}\n.result-count {\n  font-size: 0.875rem;\n}\n.book-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 24px;\n}\n.book-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform var(--transition),\n    box-shadow var(--transition),\n    border-color var(--transition);\n  box-shadow: var(--shadow-card);\n}\n.book-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-hover);\n  border-color: rgba(212, 168, 67, 0.4);\n}\n.cover-shell {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--color-surface-2);\n}\n.cover-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition);\n}\n.book-card:hover .cover-img {\n  transform: scale(1.03);\n}\n.cover-fallback {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 16px;\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface-2),\n      #1c1c38);\n}\n.category-badge {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(15, 15, 26, 0.85);\n  color: var(--color-accent);\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 999px;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n}\n.card-body {\n  padding: 14px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.book-title {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.book-author {\n  font-size: 0.82rem;\n  margin: 0;\n}\n.card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: auto;\n  padding-top: 12px;\n}\n.book-price {\n  font-size: 1.05rem;\n  color: var(--color-accent);\n  font-weight: 700;\n}\n.card-actions {\n  display: flex;\n  gap: 6px;\n}\n.add-cart-btn {\n  padding: 7px 12px;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.read-btn {\n  padding: 7px 12px;\n  font-size: 0.82rem;\n}\n.skeleton-card {\n  pointer-events: none;\n}\n.skeleton-cover {\n  aspect-ratio: 3 / 4;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-2) 25%,\n      var(--color-surface) 50%,\n      var(--color-surface-2) 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n  margin: 10px 16px 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-2) 25%,\n      var(--color-surface) 50%,\n      var(--color-surface-2) 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skeleton-line.short {\n  width: 60%;\n}\n@keyframes shimmer {\n  to {\n    background-position: -200% 0;\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state .display-lg {\n  font-size: 3rem;\n}\n.cart-summary {\n  padding: 28px;\n}\n.cart-list {\n  list-style: none;\n  margin: 16px 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cart-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.cart-item-title {\n  flex: 1;\n  font-size: 0.9rem;\n}\n.cart-item-qty {\n  font-size: 0.85rem;\n}\n.cart-item-price {\n  font-weight: 700;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n.cart-footer {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 16px;\n}\n.shipping-label {\n  max-width: 400px;\n}\n.cart-total-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cart-total {\n  font-size: 1.15rem;\n  color: var(--color-text);\n}\n.checkout-btn {\n  padding: 11px 24px;\n}\n.pdf-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(3px);\n  z-index: 300;\n}\n.pdf-modal {\n  position: fixed;\n  z-index: 301;\n  top: 3vh;\n  left: 50%;\n  transform: translateX(-50%);\n  width: min(96vw, 1200px);\n  height: 94vh;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  box-shadow: var(--shadow-card);\n}\n.pdf-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.pdf-modal-header h3 {\n  font-size: 1.1rem;\n}\n.pdf-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  height: 100%;\n  font-weight: 600;\n}\n.pdf-frame {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n@media (max-width: 900px) {\n  .hero {\n    grid-template-columns: 1fr;\n    padding: 40px 0 16px;\n  }\n  .hero-visual {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .home-page {\n    padding: 0 16px 40px;\n    gap: 32px;\n  }\n  .book-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 14px;\n  }\n  .card-footer {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .cart-total-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 18 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-MWS2TOSQ.js.map
