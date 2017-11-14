import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [

    new Recipe('Egg Bhurji',
      'How to make egg bhurji',
      'https://i.ytimg.com/vi/VBZ2cv_srFM/maxresdefault.jpg',
    ),
    new Recipe('Panner Tikka',
      'How to make Paneer Tikka',
      'http://im.rediff.com/getahead/2015/feb/03achari-paneer.jpg',
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }
}
