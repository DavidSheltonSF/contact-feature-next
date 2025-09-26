import {type Request, type Response} from 'express'
import { fakeMessages } from '../mocks/messageMocks';

export class FindAllMessagesController {

  async handle(req: Request, res: Response) {

    const sortedMessages = fakeMessages.sort((a, b) => {
      const aCreatedAt = new Date(a.createdAt)
      const bCreatedAt = new Date(b.createdAt)
      return bCreatedAt.getTime() - aCreatedAt.getTime()
    });

    return res.send({
      data: sortedMessages
    })
  }

}