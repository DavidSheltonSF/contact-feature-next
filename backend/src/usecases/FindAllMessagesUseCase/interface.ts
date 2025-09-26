import { MessageOutputDTO } from "../../types/messageTypes";

export interface FindAllMessages {
  execute: () => Promise<MessageOutputDTO[]>
}