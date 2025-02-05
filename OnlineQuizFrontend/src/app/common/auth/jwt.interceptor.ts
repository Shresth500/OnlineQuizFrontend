import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { request } from 'http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  router = Inject(Router);
  constructor(private authenticationService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let user = this.authenticationService.getUser();

    if (user && user['authToken']) {
      request = request.clone({
        setHeaders: {
          // Authorization: `${user['token']}`,
          Authorization: `Bearer ${user['authToken']}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Handle the 403 Forbidden error
          console.log('403 Forbidden: Access Denied');
          this.router.navigate(['/auth/login']);
          // Optionally, redirect the user to the login page
        }

        // Return the error
        return throwError(error);
      })
    );
  }
}
