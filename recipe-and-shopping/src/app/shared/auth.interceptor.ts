import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
/* import { AuthService } from "../auth/auth.service"; */
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { switchMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(/* private authService: AuthService */private store: Store<fromApp.AppState>){

  }

  //only incercepting request, but not responses
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    //const copiedReq = req.clone({headers: req.headers.append('','')}); //clone is non editable
    /* const copiedReq = req.clone({params: req.params.append('auth', this.authService.getToken())}); */
    //return next.handle(copiedReq);
    return this.store.select('auth')
    .pipe(take(1), switchMap((authState:fromAuth.State)=>{
        const copiedReq = req.clone({params: req.params.append('auth', authState.token)})
        return next.handle(copiedReq);
      }))
  }
}
