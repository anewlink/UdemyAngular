import { Component, OnInit/* , EventEmitter, Output */ } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataStorageService } from '../../shared/data-storage.service';
/* import { Response } from '@angular/http'; */
/* import { AuthService } from '../../auth/auth.service'; */
/* import { HttpEvent, HttpEventType } from '@angular/common/http'; */
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
  /* @Output() selectedMenu = new EventEmitter<string>(); */
  authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    /* private authService: AuthService, */
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onFetchData() {
    console.log('fetch');
    /* this.dataStorageService.getRecipes(); */
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onSaveData() {
    /*     this.dataStorageService.storeRecipes()
    .subscribe((response: HttpEvent<Object>)=>{
      console.log(response, response.type === HttpEventType.Response);
    }); */
    /* this.dataStorageService.storeRecipes().subscribe((response) => {
      console.log(response);
    }); */
    this.store.dispatch(new RecipeActions.StoreRecipes())
  }

/*   isAuthenticated() {
    return this.authService.isAuthenticated();
  } */

  onLogout() {
    //this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
  /*   onSelect(section: string){
    console.log("onSelect", section);
    this.selectedMenu.emit(section);
  } */
}
