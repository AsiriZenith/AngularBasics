import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { exhaustMap, take } from 'rxjs/Operators'
import { AuthService } from './auth.service'

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {
  constructor(private authservice: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.authservice.userSub.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req)
        }
        let ModifiedReq = req.clone({
          params: req.params.append('auth', user.token),
        })
        return next.handle(ModifiedReq)
      }),
    )
  }
}
