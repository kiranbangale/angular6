import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'recipe 1 description',
      'https://d2zk0c148yxqn5.cloudfront.net/wp-content/uploads/2017/04/eggless-choco-lava-cake-recipe.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'recipe 2 description',
      'https://d2zk0c148yxqn5.cloudfront.net/wp-content/uploads/2017/04/eggless-choco-lava-cake-recipe.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
