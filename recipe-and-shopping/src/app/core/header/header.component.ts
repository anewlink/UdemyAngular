import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipe-book/store/recipe.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onFetchData() {
    console.log('fetch');
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes())
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
