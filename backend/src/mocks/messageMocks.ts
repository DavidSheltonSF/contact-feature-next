import { ObjectId } from "mongodb"
import { MessageModel } from "../types/messageTypes"

export const fakeMessages = [
  {
    username: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
  },
  {
    username: 'Mario',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2025-02-02"
  },
]

export const fakeDatabaseMessages: MessageModel[] = [
  { 
    _id: new ObjectId(),
    username: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: new Date()
  },
  {
    _id: new ObjectId(),
    username: 'Mario',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: new Date()
  },
]