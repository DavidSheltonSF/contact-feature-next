import { MessageModel, MessageOutputDTO } from "../../types/messageTypes";

export function serializeMessage(message: MessageModel): MessageOutputDTO {
  const {_id, username, email, text, createdAt} = message;
  return {
    id: _id.toString(),
    username,
    email,
    text,
    createdAt: createdAt.toISOString()
  }
}