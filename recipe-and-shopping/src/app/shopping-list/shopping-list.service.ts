import { Ingredient } from '../shared/ingredient.model';
import { /*EventEmitter, */OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService implements OnInit {
         // ingredientsChanged = new EventEmitter<Ingredient[]>();
         ingredientsChanged = new Subject<Ingredient[]>();
         startedEditing = new Subject<number>();

         constructor() {}

         private ingredients: Ingredient[] = [
           new Ingredient('Apples', 5),
           new Ingredient('Tomatos', 10)];

         /*addIngredient(ingredient: Ingredient) {
           this.ingredients.push(ingredient);*/
           // this.ingredientsChanged.emit(this.ingredients.slice());
           /*this.ingredientsChanged.next(this.ingredients.slice());
         }*/

         addIngredients(ingredients: Ingredient[]) {
           this.ingredients.push(...ingredients);
           this.ingredientsChanged.next(this.ingredients.slice());
           // this.ingredientsChanged.emit(this.ingredients.slice());
           /* for (const ingredient of ingredients) {
              this.addIngredient(ingredient);
            } */
         }

         updateIngredient(index: number, newIngredient: Ingredient) {
          this.ingredients[index] = newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());
         }

         deleteIngredient(index: number) {
           this.ingredients.splice(index, 1);
           this.ingredientsChanged.next(this.ingredients.slice());
         }

         getIngredient(index: number) {
           return this.ingredients[index];
         }
         /*
         getIngredients() {
           return this.ingredients.slice();
         } */

         ngOnInit() {
           /*     this.recipeService.recipeIngredientsAdded.subscribe(ingredientList => {
      ingredientList.forEach(ingredient => {
        this.addIngredient(ingredient);
      });
    }); */
         }
       }
