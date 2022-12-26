/* eslint-disable no-new */
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { ConfigServer } from './config/config'
import { RecipeRouter } from './recipe/recipe.route'

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
