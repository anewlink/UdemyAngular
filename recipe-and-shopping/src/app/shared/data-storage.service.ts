import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(
      'https://ng-recipe-book-364a1.firebaseio.com/recipes' + '.json'+'?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    let tk = '';
/*     this.authService.getToken()
      .then(
        (token: string)=> {
          tk = token;
        }
      ); */
    this.http
      .get('https://ng-recipe-book-364a1.firebaseio.com/recipes' + '.json'+'?auth=' + token)
      .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes){
          if (!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe(
        (recipes: Recipe[] ) => {
        //const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      });
  }
}
