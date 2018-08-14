import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Chocolava Cake',
      'Description',
      'assets/chocoLavaCake.jpeg',
      [new Ingredient('chocolate', 2), new Ingredient('cake', 1)]
    ),
    new Recipe(
      'Veg Burger',
      'Description',
      'assets/vegBurger.jpeg',
      [new Ingredient('burger bun', 1), new Ingredient('veggies', 3)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
