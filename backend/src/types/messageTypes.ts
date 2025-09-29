import { ObjectId } from "mongodb";

export interface MessageProps {
  fullName: string,
  email: string,
  text: string,
}

export interface MessageModel {
  _id: ObjectId,
  fullName: string,
  email: string,
  text: string,
  createdAt: Date
}

export interface MessageOutputDTO {
  id: string,
  fullName: string,
  email: string,
  text: string,
  createdAt: string
}