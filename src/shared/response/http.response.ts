import { Response } from 'express'
import { Prisma } from '../../../prisma/generated/client'

/* eslint-disable no-unused-vars */
export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
  ok (res: Response, data?: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: 'Success',
      data
    })
  }

  notFound (res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: 'Not Found',
      error: data
    })
  }

  unauthorized (res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: 'Unauthorized',
      error: data
    })
  }

  forbidden (res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: 'Forbidden',
      error: data
    })
  }

  error (res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: 'Internal server error',
      error: data
    })
  }

  prismaError (res: Response, data?: any): Response {
    if (!(data instanceof Prisma.PrismaClientKnownRequestError)) return this.error(res, data)

    return this.notFound(res, data?.meta?.cause)

  }
}
