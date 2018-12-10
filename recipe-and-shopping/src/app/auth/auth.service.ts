import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {
  /* token: string; */

  constructor(private router: Router, private store: Store<fromApp.AppState>) {}

  signupUser(email: string, password: string) {
    console.log('sign up2');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.store.dispatch(new AuthActions.Signup());
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            /* this.token = token */
            this.store.dispatch(new AuthActions.SetToken(token));
          });
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    console.log('signinUser');
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(response => {
        // console.log(response);
        this.store.dispatch(new AuthActions.Signin());
        this.router.navigate(['/']);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            /* this.token = token */
            this.store.dispatch(new AuthActions.SetToken(token));
          });
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    /* this.token = null; */
    this.store.dispatch(new AuthActions.Logout());
  }

  /* getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return firebase.auth().currentUser.getIdToken();
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  } */
}
