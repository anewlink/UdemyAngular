import { Component, OnInit/* , OnDestroy */ } from '@angular/core';
import { Store } from '@ngrx/store';
/* import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service'; */
import { Router, ActivatedRoute } from '@angular/router';
import { /* Subscription, */ Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit/* , OnDestroy */ {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  /* recipes: Recipe[]; */
  recipeState: Observable<fromRecipe.State>;
  /* subscription: Subscription; */

  /*   recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/800px-Banjo_Shark_recipe.jpg'),
    new Recipe('Another Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/800px-Banjo_Shark_recipe.jpg')
  ]; */

  constructor(
    /* private recipeService: RecipeService, */
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRecipe.RecipeState>
  ) {}

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
/*     this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes(); */
  }

/*   ngOnDestroy() {
    this.subscription.unsubscribe();
  } */

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  /*   onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  } */
}
