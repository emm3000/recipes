import { Request, Response } from 'express'
import { HttpResponse } from '../../shared/response/http.response'
import { RecipeServices } from '../services/recipe.service'

export class RecipeController {
  constructor (
    private readonly recipeService: RecipeServices = new RecipeServices(),
    private readonly http: HttpResponse = new HttpResponse()
  ) {}

  async getRecipesPagination (req: Request, res: Response) {
    try {
      const { take, page, filter } = req.query
      const recipeList = await this.recipeService.getRecipesPagination(Number(page), Number(take), String(filter))
      return this.http.ok(res, recipeList)
    } catch (error) {
      return this.http.error(res, error)
    }
  }
}
