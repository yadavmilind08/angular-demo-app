import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
