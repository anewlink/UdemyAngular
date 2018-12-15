import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
/* import { AuthService } from './auth.service'; */
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(/* private authService: AuthService */
    private store: Store<fromApp.AppState>
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return this.authService.isAuthenticated();
    return this.store.select('auth')
      .pipe(take(1), map((authState: fromAuth.State)=>{
      return authState.authenticated;
    }));
  }
}


/* @Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.set('', '')});
    return this.store.select('auth')
      .take(1)
      .switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(copiedReq);
      })

    // return null;
  }
} */
