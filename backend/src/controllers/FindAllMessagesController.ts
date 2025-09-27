import {type Request, type Response} from 'express'
import { fakeMessages } from '../mocks/messageMocks';
import { FindAllMessages } from '../usecases/FindAllMessagesUseCase/interface';
import { HttpRequest } from './httpPort';

export class FindAllMessagesController {

  private readonly useCase: FindAllMessages
  
  constructor(useCase: FindAllMessages){
    this.useCase = useCase
  }

  async handle(request: HttpRequest) {

    const results = await this.useCase.execute();

    const sortedMessages = results.sort((a, b) => {
      const aCreatedAt = new Date(a.createdAt)
      const bCreatedAt = new Date(b.createdAt)
      return bCreatedAt.getTime() - aCreatedAt.getTime()
    });

    return {
      statusCode: 200,
      body: sortedMessages
    }
  }

}


