import { MessageRepository } from "../../repositories/port";
import { MessageOutputDTO } from "../../types/messageTypes";
import { serializeMessage } from "../helpers/serializeMessage";
import { FindAllMessages } from "./interface";

export class FindAllMessagesUseCase implements FindAllMessages{
  private readonly messageRepo: MessageRepository;

  constructor(messageRepo: MessageRepository){
    this.messageRepo = messageRepo
  }

  async execute(): Promise<MessageOutputDTO[]>{
    const results = await this.messageRepo.findAll();

    const serializedMessages = results.map(msg => {
      return serializeMessage(msg)
    })

    return serializedMessages
  }
}