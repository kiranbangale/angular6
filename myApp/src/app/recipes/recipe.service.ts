import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'recipe 1 description',
      'assets/chocoLavaCake.jpeg',
      [new Ingredient('chocolate', 2), new Ingredient('cake', 1)]
    ),
    new Recipe(
      'A test recipe 2',
      'recipe 2 description',
      'assets/chocoLavaCake.jpeg',
      [new Ingredient('chocolate', 5), new Ingredient('ice-cream cake', 1)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
