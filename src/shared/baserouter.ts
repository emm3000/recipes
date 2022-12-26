import { Router } from 'express'

export abstract class BaseRouter<T, U = null> {
  public router: Router = Router()
  public controller: T
  public middleware: U | null
  constructor (TController: { new (): T }, UMiddleware?: { new (): U }) {
    this.controller = new TController()
    this.middleware = UMiddleware ? new UMiddleware() : null
    this.routes()
  }

  abstract routes(): void
}
