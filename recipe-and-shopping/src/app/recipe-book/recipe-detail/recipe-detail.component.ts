import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.recipeService.recipeIngredientsAdded.emit(this.recipe.ingredients);
    // let shoppingList = this.shoppingListService.getIngredients();
    /* this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
    console.log(event); */
    // this.shoppingListService.addIngredient();
  }

}
