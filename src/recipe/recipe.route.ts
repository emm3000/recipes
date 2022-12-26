import { BaseRouter } from '../shared/baserouter'
import { RecipeController } from './controllers/recipe.controller'

export class RecipeRouter extends BaseRouter<RecipeController, null> {
  constructor () {
    super(RecipeController)
  }

  // overrides
  routes (): void {
    this.router.get('/recipes', (req, res) => this.controller.getRecipesPagination(req, res))
  }
 
}
