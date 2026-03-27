import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authTokenInterceptor } from './app/interceptors/auth-token.interceptor';
import { fakeBackendInterceptor } from './app/interceptors/fake-backend.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authTokenInterceptor, fakeBackendInterceptor]))
  ]
}).catch((error) => console.error(error));
