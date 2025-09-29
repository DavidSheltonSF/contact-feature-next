import { ObjectId } from "mongodb"
import { MessageModel } from "../types/messageTypes"

export const fakeMessages = [
  {
    fullName: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
  },
  {
    fullName: 'Mario',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2025-02-02"
  },
]

export const fakeDatabaseMessages: MessageModel[] = [
  { 
    _id: new ObjectId(),
    fullName: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: new Date()
  },
  {
    _id: new ObjectId(),
    fullName: 'Mario',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: new Date()
  },
]