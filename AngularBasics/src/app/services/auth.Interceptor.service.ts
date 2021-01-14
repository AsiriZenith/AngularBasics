import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request Interceptor')
    let modifiedRequest = req.clone({
      // headers: req.headers.append('auth', 'abc'),
    })
    return next.handle(modifiedRequest)
  }
}
