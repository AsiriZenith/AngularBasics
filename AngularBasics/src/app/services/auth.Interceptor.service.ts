import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { tap } from 'rxjs/operators'

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Sending request to the Interceptor')
    let modifiedRequest = req.clone({
      headers: req.headers.append('auth', 'abc'),
    })
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log('response from interseptor')
        console.log(event)
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      }),
    )
  }
}
