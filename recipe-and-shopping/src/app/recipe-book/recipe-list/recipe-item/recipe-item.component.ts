import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
  }

}
