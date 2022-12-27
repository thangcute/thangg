import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static accesstoken='';

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // request=request.clone({
    //   headers: request.headers.set('authorization', this.authService.token),
    // });
    const req =request.clone({
      setHeaders:{
        Authorization: AuthInterceptor.accesstoken
      }
    })

    return next.handle(req);
  }
}

// export const AuthInterceptorProvider={
//   provide: HTTP_INTERCEPTORS,
//   useClass: AuthInterceptor,
//   multi: true,
// }
