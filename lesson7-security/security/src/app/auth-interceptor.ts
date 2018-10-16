import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, delay, retry, mergeMap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('headerName', '5555555')
    });

    return next.handle(authReq).pipe(
      retry(2),
      delay(3000),
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401) {
           // => login
        }
        if(error.status === 403) {
          // => contact admin
        }
        return throwError(error);
      })
    );
  };
}


// retryWhen(retryFunctionFactory({
//   maxTTL: 5,
//   delayMs: 2000,
//   errorsToHandle: [0]
// })),

// tslint:disable-next-line:typedef
export const retryFunctionFactory = (
  retryFnConfig: {
    maxTTL: number,
    delayMs: number,
    errorsToHandle: number[]
  }
) => {

  return (error$: Observable<HttpErrorResponse>) => {
    let ttl: number = retryFnConfig.maxTTL;

    return error$
      .pipe(
        mergeMap((error: HttpErrorResponse) => {
          if (ttl && retryFnConfig.errorsToHandle.indexOf(error.status) !== -1) {
            ttl--;

            return of(null)
              .pipe(
                delay(retryFnConfig.delayMs)
              );
          }

          return throwError(error);
        })
      );
    };
};