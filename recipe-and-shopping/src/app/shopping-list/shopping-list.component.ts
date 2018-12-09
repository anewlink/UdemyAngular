import { Component, OnInit /* , Input,  OnDestroy*/} from '@angular/core';
import { /* Subscription, */ Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //ingredients: Ingredient[];
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  //private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{
    shoppingList: {ingredients: Ingredient[]}}>) {

  }

/*   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ]; */

  // onIngredientAdded(ingredient: Ingredient) {
    // console.log('onIngredientAdded', ingredient);
    // this.ingredients.push(ingredient);
    // this.shoppingListService.addIngredient(ingredient);
  // }



  ngOnInit() {
    //this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    /* this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    ); */
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  /* ngOnDestroy() {
    this.subscription.unsubscribe();
  } */

}
