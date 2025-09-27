import { InvalidUsernameError } from '../usecases/errors/InvalidUsernameError';
import { InvalidEmailError } from '../usecases/errors/InvalidEmailError';
import { CreateMessage } from '../usecases/CreateMessageUseCase/interface';
import { HttpRequest, HttpResponse } from './httpPort';
import { badRequest, ok, serverError } from './helpers/httpHelpers';
export class CreateMessageController {

  private readonly useCase: CreateMessage

  constructor(useCase: CreateMessage){
    this.useCase = useCase
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {

    try {
      const body = request.body
      console.log(body)

      if (!body){
        return badRequest('Request body is missing')
      }

      const {username, email, text} = body;

      if (!username){
        return badRequest('Username is missing')
      }

      if (!email){
        return badRequest('User email is required')
      }

      if (!text){
        return badRequest('User text message is required')
      }

      const result = await this.useCase.execute(body)

      return ok(result)

    } catch (error) {
      console.log(error);

      if(error instanceof InvalidUsernameError) {
        return badRequest(error.message)
      }

      if(error instanceof InvalidEmailError) {
        return badRequest(error.message)
      }

      return serverError('Internal server error')
    }
  }
}