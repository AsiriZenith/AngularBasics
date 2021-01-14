import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/Operators'

export class LogginInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        console.log('logging response from interseptor')
        console.log(event)
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      }),
    )
  }
}
