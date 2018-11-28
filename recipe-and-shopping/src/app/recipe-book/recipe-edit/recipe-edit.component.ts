import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id']; //static
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      console.log(this.id);
      this.editMode = params['id'] != null;
      //this.editMode = this.id!== NAN;
      console.log(this.id, '1-', this.editMode);
    });
  }



}