import { Injectable } from '@angular/core';
/* import { Http, Response } from '@angular/http'; */
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(
    /* private http: Http, */
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    // const token = this.authService.getToken();
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-364a1.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true/* ,
      params: new HttpParams().set('auth', token) */
    });
    return this.httpClient.request(req);
/*     return this.httpClient.put(
      'https://ng-recipe-book-364a1.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token),

      } */
      /* ,
        headers: new HttpHeaders().set('Authorization', 'Bearer afdsffsff')
      //{observe: 'events'}
    );*/
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // let tk = '';
    /*     this.authService.getToken()
      .then(
        (token: string)=> {
          tk = token;
        }
      ); */
    this.httpClient

      /*       .get<Recipe[]>(
        'https://ng-recipe-book-364a1.firebaseio.com/recipes' +
          '.json' +
          '?auth=' +
          token
      ) */
      .get<Recipe[]>(
        'https://ng-recipe-book-364a1.firebaseio.com/recipes.json'
          /*  +
          '?auth=' +
          token */,
        {
          observe: 'body', //default body...options: full all the response
          responseType: 'json' //default json..options: text blob, arraybuffer
        }
      )
      /*       .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json(); */
      /* .pipe(map((recipes: Recipe[]) => { */
      .pipe(
        map((recipes: Recipe[]) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        //const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      });
  }
}
