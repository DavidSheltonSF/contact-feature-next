import { HttpRequest, HttpResponse } from "./httpPort";

export interface Controller {
 handle(httpRequest: HttpRequest): Promise<HttpResponse>
}