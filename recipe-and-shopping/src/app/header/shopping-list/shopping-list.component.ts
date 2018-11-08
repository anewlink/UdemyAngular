import { Component, OnInit , Input} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    console.log('onIngredientAdded', ingredient);
    this.ingredients.push(ingredient);
  }

  constructor() {}

  ngOnInit() {}
}
