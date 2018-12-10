import {
  Component,
  OnInit,
  ViewChild,
/*   ElementRef, */
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
/* import { ShoppingListService } from '../shopping-list.service'; */
import { NgForm } from '@angular/forms';
import * as ShoppingListActions from '../store/shopping-list.actions';
/* import * as fromShoppingList from '../store/shopping-list.reducers'; */
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  /* @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; */
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
 /*  editedItemIndex: number; */
  editedItem: Ingredient;

  constructor(/* private shoppingListService: ShoppingListService, */ private store: Store<fromApp.AppState>/* {
    shoppingList: {ingredients: Ingredient[]}}> */) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1){
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.shoppingListForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      );
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log(newIngredient);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
