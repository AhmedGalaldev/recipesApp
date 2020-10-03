import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'test Recipe',
      'this description of test recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [new Ingredient('meat', 2), new Ingredient('meat', 2)]
    ),
    new Recipe(
      'test Recipe two',
      'this description of test recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [new Ingredient('meat', 2), new Ingredient('meat', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // slice to get copy of array not the same array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
