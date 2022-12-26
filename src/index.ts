/* eslint-disable no-new */
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { ConfigServer } from './config/config'
import { RecipeRouter } from './recipe/recipe.route'

// const app: express.Application = express()

// app.get('/', async (req, res) => {
//   const model = await prisma.recipe.findMany({
//     include: {
//       ingredients: true,
//       preparation: true
//     }
//   })
  
//   const mapped = model.map(el => {
//     return { 
//       ...el,
//       ingredients: el.ingredients.map(y => y.text),
//       preparation: el.ingredients.map(y => y.text)
//     }
//   })
  
//   res.json(mapped)
// })

// app.listen('3000', () => {
//   console.log('Server running on port 3000')
// })

class ServerBoostrap extends ConfigServer {
  public app: express.Application = express()
  private port: number = this.getNumberEnv('PORT')

  constructor () {
    super()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.passportUser()
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use('/api', this.routers())
    this.listen()
  }

  routers (): express.Router[] {
    return [
      new RecipeRouter().router
    ]
  }

  passportUser () {
    return [
    
    ]
  }

  public listen () {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

new ServerBoostrap()
