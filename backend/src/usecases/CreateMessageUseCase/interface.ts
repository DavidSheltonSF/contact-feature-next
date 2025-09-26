import { MessageOutputDTO, MessageProps } from "../../types/messageTypes";

export interface CreateMessage {
  execute: (message: MessageProps) => Promise<MessageOutputDTO>
}