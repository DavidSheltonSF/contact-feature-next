import { ObjectId } from "mongodb";

export interface MessageProps {
  username: string,
  email: string,
  text: string,
}

export interface MessageModel {
  _id: ObjectId,
   username: string,
  email: string,
  text: string,
  createdAt: Date
}

export interface MessageOutputDTO {
  id: string,
  username: string,
  email: string,
  text: string,
  createdAt: string
}