import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiEndpoints } from '../core/api-endpoints';
import { ApiResponse, BackendBook, Book, BookListResponse, PagedBackendResponse, UploadBookRequest } from '../core/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  list(search = '') {
    return this.http.get<PagedBackendResponse>(ApiEndpoints.books).pipe(
      map((response) => {
        const mappedItems = response.content
          .map((book) => this.mapBook(book))
          .filter((book) => {
            if (!search.trim()) {
              return true;
            }
            const term = search.toLowerCase();
            return [book.title, book.author, book.isbn || '', book.category, book.description]
              .join(' ')
              .toLowerCase()
              .includes(term);
          });

        const payload: BookListResponse = {
          items: mappedItems,
          page: response.page.number,
          size: response.page.size,
          total: response.page.totalElements
        };
        return payload;
      })
    );
  }

  uploadBook(payload: UploadBookRequest) {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('author', payload.author);
    formData.append('isbn', payload.isbn);
    formData.append('publisher', payload.publisher);
    formData.append('publishedDate', payload.publishedDate);
    formData.append('category', payload.category);
    formData.append('language', payload.language);
    formData.append('pageCount', String(payload.pageCount));
    formData.append('price', String(payload.price));
    formData.append('currency', payload.currency);
    formData.append('active', String(payload.active));
    formData.append('inStock', String(payload.inStock));
    formData.append('description', payload.description);
    formData.append('pdfStorageType', payload.pdfStorageType);
    formData.append('pdfFile', payload.pdfFile);

    return this.http.post<ApiResponse<BackendBook> | BackendBook>(ApiEndpoints.books, formData).pipe(
      map((response) => this.mapBook('data' in response ? response.data : response))
    );
  }

  deleteBook(bookId: string) {
    return this.http.delete(`${ApiEndpoints.books}/${bookId}`);
  }

  getPdfBlob(bookId: string) {
    return this.http.get(`${ApiEndpoints.books}/${bookId}/pdf`, { responseType: 'blob' });
  }

  private mapBook(book: BackendBook): Book {
    const apiOrigin = new URL(environment.apiBaseUrl).origin;
    const pdfUrl = book.pdfDownloadUrl
      ? (book.pdfDownloadUrl.startsWith('http') ? book.pdfDownloadUrl : `${apiOrigin}${book.pdfDownloadUrl}`)
      : undefined;

    return {
      id: book.id,
      title: book.name,
      author: book.author,
      isbn: book.isbn,
      coverUrl: book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` : undefined,
      price: Number(book.price),
      category: book.category,
      description: book.description ?? '',
      inStock: book.inStock,
      pdfDownloadUrl: pdfUrl
    };
  }
}
