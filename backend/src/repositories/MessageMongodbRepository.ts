import { MongodbHelper } from "./helpers/MongodbHelper"
import { MessageProps, MessageModel } from "../types/messageTypes";

const mongoHelper = MongodbHelper.getInstance()

export class MessageMongodbRepository {

  messsageCollection = mongoHelper.getCollection('messages')

  async create(message: MessageProps): Promise<MessageModel | null>{
    const result = await this.messsageCollection.insertOne({...message, createdAt: new Date()});

    const createdMessage = await this.messsageCollection.findOne({_id: result.insertedId})
    
    if(createdMessage === null){
      return null
    }
    
    return {
      _id: createdMessage._id,
      username: createdMessage.username,
      email: createdMessage.email,
      text: createdMessage.text,
      createdAt: createdMessage.createdAt
    };
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