import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../controllers/httpPort"
import { Controller } from "../controllers/interface"

export const adaptExpress = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
      body: req.body,
      params: req.params,
      query: req.query
    }

    const response: HttpResponse = await controller.handle(httpRequest)

    res.status(response.statusCode).send(response)
  }
}