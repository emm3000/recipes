import { Ingredient, Preparation, Recipe } from '../../../prisma/generated/client'

export type CompleteRecipe = (Recipe & {
    ingredients: Ingredient[];
    preparation: Preparation[];
})

export type CompleteRecipeMapped = (Recipe & {
    ingredients: string[];
    preparation: string[];
})
export class RecipeMapper {

  public mapRecipeToExpose (input: CompleteRecipe[]): CompleteRecipeMapped[] {
    const mapped = input.map((el: CompleteRecipe) => {
      return { 
        ...el,
        ingredients: el.ingredients.map(y => y.text),
        preparation: el.preparation.map(y => y.text)
      }
    })
    return mapped
  }
}
