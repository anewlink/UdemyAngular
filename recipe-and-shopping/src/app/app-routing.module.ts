import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
/* import { RecipeBookComponent } from './recipe-book/recipe-book.component'; */
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
/* import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service'; */
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule'},
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
/*   { path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]}, */
  { path: 'shopping-list', component: ShoppingListComponent }/* ,
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
