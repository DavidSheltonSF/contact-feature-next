import { MessageModel, MessageOutputDTO } from "../../types/messageTypes";

export function serializeMessage(message: MessageModel): MessageOutputDTO {
  const {_id, fullName, email, text, createdAt} = message;
  return {
    id: _id.toString(),
    fullName,
    email,
    text,
    createdAt: createdAt.toISOString()
  }
}