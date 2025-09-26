import { MongodbHelper } from "./helpers/MongodbHelper"
import { MessageProps, MessageModel } from "../types/messageTypes";

const mongoHelper = MongodbHelper.getInstance()

export class MessageMongoDbRepository {

  messsageCollection = mongoHelper.getCollection('messages')

  async create(message: MessageProps) {
    const result = await this.messsageCollection.insertOne({...message, createdAt: new Date()});
    return result;
  }

  async findAll(): Promise<MessageModel[]> {
    const result = await this.messsageCollection.find().toArray();

    const mappedResults = result.map(msg => {
      return {
        _id: msg._id,
        username: msg.username,
        email: msg.email,
        text: msg.text,
        createdAt: msg.createdAt
      }
    });

    return mappedResults;
  }
}