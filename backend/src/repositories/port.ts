import { MessageModel, MessageProps } from "../types/messageTypes";

export interface MessageRepository {
  findAll: () => Promise<MessageModel[]>
  create: (message: MessageProps) => Promise<MessageModel | null>
}