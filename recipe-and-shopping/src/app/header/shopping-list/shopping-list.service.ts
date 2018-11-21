import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, OnInit } from "@angular/core";

export class ShoppingListService implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
    /* for (const ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  ngOnInit() {
/*     this.recipeService.recipeIngredientsAdded.subscribe(ingredientList => {
      ingredientList.forEach(ingredient => {
        this.addIngredient(ingredient);
      });
    }); */
  }
}
