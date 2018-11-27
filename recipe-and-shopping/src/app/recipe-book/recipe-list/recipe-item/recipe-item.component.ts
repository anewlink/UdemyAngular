import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  //recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    /* this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    ); */
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
  }

  onRecipeSelected() {

  }



}
