import { MessageRepository } from "../../repositories/port";
import { MessageOutputDTO, MessageProps } from "../../types/messageTypes";
import { InvalidEmailError } from "../errors/InvalidEmailError";
import { InvalidFullNameError } from "../errors/InvalidFullName";
import { serializeMessage } from "../helpers/serializeMessage";
import { validateEmail } from "../helpers/validateEmail";
import { validateFullName } from "../helpers/validateFullName";
import { CreateMessage } from "./interface";

export class CreateMessageUseCase implements CreateMessage {
  private readonly messageRepo: MessageRepository;

  constructor(messageRepo: MessageRepository){
    this.messageRepo = messageRepo
  }

  async execute(message: MessageProps): Promise<MessageOutputDTO>{

    const {fullName, email} = message

    const fullNameIsValid = validateFullName(fullName)
    if(!fullNameIsValid){
      throw new InvalidFullNameError(fullName)
    }

    const emailIsValid = validateEmail(email)
    if(!emailIsValid){
      throw new InvalidEmailError(email)
    }

    const result = await this.messageRepo.create(message);

    if(!result) {
      throw Error('Something went wrong! Message wa not created!')
    }

    const serializedMessage = serializeMessage(result)

    return serializedMessage
  }
}