import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, UploadBookRequest } from '../../core/models';
import { AuthService } from '../../services/auth.service';
import { BooksService } from '../../services/books.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly authService = inject(AuthService);
  private readonly booksService = inject(BooksService);
  readonly cartService = inject(CartService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly shelves = ['Bestsellers', 'Fiction', 'Romance', 'Tech', 'Science', 'History', 'Self-Help', 'Mystery', 'Biography', 'Kids & YA'];

  searchTerm = signal('');
  books = signal<Book[]>([]);
  loadingBooks = signal(false);

  statusMessage = signal('');
  errorMessage = signal('');

  // PDF reader
  showPdfReader = signal(false);
  selectedPdfUrl = signal<SafeResourceUrl | null>(null);
  selectedPdfTitle = signal('');
  loadingPdf = signal(false);
  pdfReaderError = signal('');
  private selectedPdfObjectUrl: string | null = null;

  showUploadModal = signal(false);
  uploadModalStatus = signal<{ type: 'success' | 'error'; text: string } | null>(null);

  deleteTarget = signal<{ id: string; title: string } | null>(null);
  deleteConfirmText = signal('');
  deleting = signal(false);
  showMoreShelves = signal(false);
  activeShelf = signal('');
  readonly visibleShelvesCount = 6;

  get visibleShelves() { return this.shelves.slice(0, this.visibleShelvesCount); }
  get overflowShelves() { return this.shelves.slice(this.visibleShelvesCount); }

  selectShelf(shelf: string) {
    const next = this.activeShelf() === shelf ? '' : shelf;
    this.activeShelf.set(next);
    this.searchTerm.set(next);
    this.onSearch();
    this.showMoreShelves.set(false);
  }

  clearShelf() {
    this.activeShelf.set('');
    this.searchTerm.set('');
    this.onSearch();
  }

  // Admin upload form
  uploadForm = {
    name: '',
    author: '',
    isbn: '',
    publisher: '',
    publishedDate: '',
    category: 'General',
    language: 'English',
    pageCount: 100,
    price: 9.99,
    currency: 'USD',
    active: true,
    inStock: true,
    description: '',
    pdfStorageType: 'DATABASE_BLOB' as 'DATABASE_BLOB' | 'FILE_SYSTEM' | 'OBJECT_STORAGE'
  };
  uploadPdfFile: File | null = null;
  uploadingBook = signal(false);

  // Cart
  shippingAddress = '221B Baker Street, London';
  loadingCart = signal(false);
  checkingOut = signal(false);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      this.searchTerm.set(q);
      this.loadBooks(q);
    });
  }

  onSearch() {
    const q = this.searchTerm().trim();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: q ? { q } : {},
      queryParamsHandling: ''
    });
  }

  loadBooks(search = '') {
    this.loadingBooks.set(true);
    this.clearMessages();

    this.booksService.list(search).subscribe({
      next: (res) => {
        this.books.set(res.items);
        this.loadingBooks.set(false);
      },
      error: (err) => {
        this.loadingBooks.set(false);
        this.errorMessage.set(err?.error?.error?.message || err?.error?.message || 'Failed to load books.');
      }
    });
  }

  addToCart(bookId: string, book: Book) {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set('Please sign in to add books to your cart.');
      return;
    }
    this.clearMessages();

    this.cartService.addItem({ bookId, quantity: 1 }, book).subscribe({
      next: () => {
        this.statusMessage.set('Added to cart.');
        setTimeout(() => this.statusMessage.set(''), 2500);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.error?.message || err?.error?.message || 'Unable to add to cart.');
      }
    });
  }

  checkout() {
    this.clearMessages();
    this.checkingOut.set(true);

    this.cartService.checkout({ paymentMethod: 'CARD', shippingAddress: this.shippingAddress }).subscribe({
      next: (res) => {
        this.checkingOut.set(false);
        this.statusMessage.set(`Order ${res.orderId} placed! Total: $${res.totalAmount.toFixed(2)}`);
        this.cartService.clearLocalCart();
      },
      error: (err) => {
        this.checkingOut.set(false);
        this.errorMessage.set(err?.error?.error?.message || err?.error?.message || 'Checkout failed.');
      }
    });
  }

  openDeleteModal(book: { id: string; title: string }) {
    this.deleteTarget.set(book);
    this.deleteConfirmText.set('');
  }

  confirmDelete() {
    const target = this.deleteTarget();
    if (!target || this.deleteConfirmText().toLowerCase() !== 'delete') return;
    this.deleting.set(true);

    this.booksService.deleteBook(target.id).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteTarget.set(null);
        this.books.update(list => list.filter(b => b.id !== target.id));
        this.statusMessage.set(`"${target.title}" deleted.`);
        setTimeout(() => this.statusMessage.set(''), 3000);
      },
      error: (err) => {
        this.deleting.set(false);
        this.errorMessage.set(err?.error?.error?.message || err?.error?.message || 'Delete failed.');
      }
    });
  }

  canUploadBooks() {
    const role = this.authService.user()?.role;
    return role === 'ADMIN' || role === 'SUPERADMIN';
  }

  onPdfSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.uploadPdfFile = input.files?.[0] || null;
  }

  uploadBook() {
    if (!this.uploadPdfFile) {
      this.uploadModalStatus.set({ type: 'error', text: 'Please select a PDF file.' });
      return;
    }
    this.uploadModalStatus.set(null);
    this.uploadingBook.set(true);

    const payload: UploadBookRequest = { ...this.uploadForm, pdfFile: this.uploadPdfFile };
    this.booksService.uploadBook(payload).subscribe({
      next: () => {
        this.uploadingBook.set(false);
        this.uploadModalStatus.set({ type: 'success', text: 'Book uploaded successfully!' });
        this.uploadPdfFile = null;
        this.loadBooks(this.searchTerm());
        setTimeout(() => this.showUploadModal.set(false), 1800);
      },
      error: (err) => {
        this.uploadingBook.set(false);
        const msg = err?.error?.error?.message || err?.error?.message || 'Upload failed. Please try again.';
        this.uploadModalStatus.set({ type: 'error', text: msg });
      }
    });
  }

  openPdfReader(book: Book) {
    if (!book.pdfDownloadUrl) {
      this.errorMessage.set('PDF not available for this book.');
      return;
    }
    this.releasePdfObjectUrl();
    this.selectedPdfTitle.set(book.title);
    this.loadingPdf.set(true);
    this.pdfReaderError.set('');
    this.showPdfReader.set(true);

    this.booksService.getPdfBlob(book.id).subscribe({
      next: (blob) => {
        this.loadingPdf.set(false);
        const pdfBlob = blob.type === 'application/pdf' ? blob : new Blob([blob], { type: 'application/pdf' });
        this.selectedPdfObjectUrl = URL.createObjectURL(pdfBlob);
        this.selectedPdfUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPdfObjectUrl + '#toolbar=0&navpanes=0'));
      },
      error: () => {
        this.loadingPdf.set(false);
        this.pdfReaderError.set('Unable to load PDF.');
      }
    });
  }

  closePdfReader() {
    this.showPdfReader.set(false);
    this.selectedPdfUrl.set(null);
    this.selectedPdfTitle.set('');
    this.loadingPdf.set(false);
    this.pdfReaderError.set('');
    this.releasePdfObjectUrl();
  }

  get cart() {
    return this.cartService.cart();
  }

  private clearMessages() {
    this.errorMessage.set('');
    this.statusMessage.set('');
  }

  private releasePdfObjectUrl() {
    if (this.selectedPdfObjectUrl) {
      URL.revokeObjectURL(this.selectedPdfObjectUrl);
      this.selectedPdfObjectUrl = null;
    }
  }
}
