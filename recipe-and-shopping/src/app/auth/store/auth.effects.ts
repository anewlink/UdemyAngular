import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect() //{dispatch: false } if the effect don't imply an state change
  authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP).pipe(
    map((action: AuthActions.TrySignup) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return from(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authSignIn = this.actions$.ofType(AuthActions.TRY_SIGNIN).pipe(
    map((action: AuthActions.TrySignin) => action.payload),
    switchMap((authData: { username: string; password: string }) => {
      return from(
        firebase
          .auth()
          .signInWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  constructor(private actions$: Actions, private router: Router) {}
}
