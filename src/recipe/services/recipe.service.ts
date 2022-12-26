import { prisma } from '../../config/prisma'
import { CompleteRecipeMapped, RecipeMapper } from '../mappers/recipe.mapper'

interface Pagination<T> {
  data: T
  total: number,
  page: number,
  limit: number,
  pages: number,
  hasNext: boolean,
  hasPrev: boolean,
}

export class RecipeServices {
  constructor (
    private readonly recipe = prisma.recipe,
    private readonly mapper: RecipeMapper = new RecipeMapper()
  ) {}

  async getRecipesPagination (page: number, take: number, filter: string): Promise<Pagination<CompleteRecipeMapped[]> | CompleteRecipeMapped[]> {
    if (!page && !take) {
      const first = await this.recipe.findMany({ take: 10, include: { ingredients: true, preparation: true } })
      return this.mapper.mapRecipeToExpose(first)
    }

    const count = await this.recipe.count({
      where: {
        OR: [
          {
            title: {
              contains: filter
            }
          },
          {
            ingredients: {
              some: {
                text: {
                  contains: filter
                }
              }
            }
          }
        ]
      }
    })
    const listRecipe = await this.recipe.findMany({
      skip: page * take,
      take,
      orderBy: {
        id: 'desc'
      },
      where: {
        OR: [
          {
            title: {
              contains: filter
            }
          },
          {
            ingredients: {
              some: {
                text: {
                  contains: filter
                }
              }
            }
          }
        ]
      },
      include: {
        ingredients: true,
        preparation: true
      }
    })
    // console.log(`
    //   return {
    //     data: x,
    //     total: ${count},
    //     page: ${page},
    //     limit: ${take},
    //     pages: Math.ceil(${count} / ${take})  = ${Math.ceil(count / take)}
    //     hasNext: ${page} < Math.ceil(${count} / ${take}) - 1  = ${Math.ceil(count / take) - 1},
    //     hasPrev: ${page} > 0
    //   }
    // `)
    return {
      data: this.mapper.mapRecipeToExpose(listRecipe),
      total: count,
      page,
      limit: take,
      pages: Math.ceil(count / take),
      hasNext: page < Math.ceil(count / take) - 1,
      hasPrev: page > 0
    }
  }
}
