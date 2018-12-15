import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>/* private authService: AuthService */) { }

  ngOnInit() {

  }

  onSignin(form: NgForm) {
    console.log("sign up1");
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signinUser(email, password);
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
  }

}
