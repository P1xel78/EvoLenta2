import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  delay,
  mergeMap,
  Observable,
  of,
  retryWhen,
  throwError,
} from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen((errors) =>
        errors.pipe(
          // Фильтруем ошибки, оставляя только 429
          mergeMap((error) => {
            if (error instanceof HttpErrorResponse && error.status === 429) {
              // Задаем задержку перед повтором
              return of(error).pipe(delay(3000)); // Задержка в 3000 мс
            }
            return throwError(error);
          })
        )
      ),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
