
/* eslint-disable no-unused-vars */
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { Recipe } from '../../prisma/generated/client'
import { prisma } from '../config/prisma'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

export async function uploadSingleImage (url: string): Promise<string | null> {
  try {
    const result = await cloudinary.uploader.upload(url, { folder: 'food' })
    return result.secure_url
  } catch (e: any) {
    return null
  }
}

async function deleteAll () {
  await prisma.recipe.deleteMany({})
  await prisma.ingredient.deleteMany({})
  await prisma.preparation.deleteMany({})
}

export async function seedData () {
  await deleteAll()
  const dataBuffer = fs.readFileSync(path.resolve(process.cwd(), 'user3.json'), 'utf-8')
  const data = JSON.parse(dataBuffer)

  await Promise.all(
    data.map(async (recipe: any) => {
      const urlCloudinary = await uploadSingleImage(recipe.urlImage)
      return await prisma.recipe.create({
        data: {
          id: recipe.id,
          code: recipe.code,
          title: recipe.title,
          latitude: recipe.latitude,
          longitude: recipe.longitude,
          portions: recipe.portions,
        
          time: recipe.time,
          urlImage: urlCloudinary ?? '',
          ingredients: {
            create: recipe.ingredients.map((e: any) => ({
              text: e
            }))
          },
          preparation: {
            create: recipe.preparation.map((e: any) => ({
              text: e
            }))
          }
        }
      })
    })
  )
  
}
// deleteAll()
seedData()
  .then(console.log)
  .catch((error) => {
    console.log(error.message)
  })
