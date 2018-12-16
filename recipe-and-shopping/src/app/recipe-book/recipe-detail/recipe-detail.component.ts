import { Component, OnInit/* , Input, EventEmitter */} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
/* import { Recipe } from '../recipe.model'; */
/* import { Ingredient } from './../../shared/ingredient.model'; */
import { RecipeService } from '../recipe.service';
/* import { Ingredient } from 'src/app/shared/ingredient.model'; */
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
/* import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers'; */
/* import * as fromApp from '../../store/app.reducers'; */
import { Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';
import { take } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  /* @Input() recipe: Recipe; */
  /* recipe: Recipe; */
  recipeState : Observable<fromRecipe.State>;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipe.RecipeState>) {

  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        /* this.recipe = this.recipeService.getRecipe(this.id); */
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  onAddToShoppingList() {

    //this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    this.store.select('recipes')
    .pipe(
      take(1)
    )
    .subscribe((recipeState: fromRecipe.State) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
    });

    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.recipeService.recipeIngredientsAdded.emit(this.recipe.ingredients);
    // let shoppingList = this.shoppingListService.getIngredients();
    /* this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
    console.log(event); */
    // this.shoppingListService.addIngredient();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    //this.recipeService.deleteRecipe(this.id);
    this.store.dispatch( new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
