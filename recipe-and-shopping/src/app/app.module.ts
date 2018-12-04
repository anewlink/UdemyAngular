import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { FormsModule } from '@angular/forms'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { HeaderComponent } from './header/header.component'; */
/* import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service'; */
import { HttpModule } from '@angular/http';
/* import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service'; */
/* import { RecipesModule } from './recipe-book/recipes.module'; */
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
/* import { HomeComponent } from './home/home.component'; */

@NgModule({
  declarations: [
    AppComponent,
/*     HeaderComponent,
    HomeComponent, */
    /* RecipeBookComponent, */
    // ShoppingListComponent,
    /* RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent, */
    // ShoppingEditComponent,
    /* RecipeStartComponent,
    RecipeEditComponent, */
    /* SignupComponent,
    SigninComponent */
  ],
  imports: [
   /*  RecipesModule, */
    BrowserModule,
    AppRoutingModule,
    /* FormsModule, */
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
    /* ,
    ReactiveFormsModule */
  ],
  //providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard,
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
