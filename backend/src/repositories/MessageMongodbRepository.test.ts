import { MessageMongoDbRepository } from './MessageMongodbRepository';
import { MongodbHelper } from './helpers/MongodbHelper';
import dotenv from 'dotenv'
dotenv.config()

describe('Testing MongodbHelper', () => {
  const mongoHelper = MongodbHelper.getInstance()

  beforeAll(async () => {
    const uri = process.env.MONGO_URI;
    if (!uri){
      throw Error('Mongodb URI was not found')
    }
    await mongoHelper.connect(uri)
  });

  beforeEach(async () => {
    await mongoHelper.clearCollection('messages');
  })

  afterAll(async () => {
   await  mongoHelper.disconnect()
  })

  test('Should create a new message', async () => {
    const mongoHelper = MongodbHelper.getInstance()
    const messagesCollection = mongoHelper.getCollection('messages');
    const messageRepository = new MessageMongoDbRepository()

    const message = {
      username: 'Jeraldo',
      email: 'jera@email.com',
      text: "This is a simple message",
      createdAt: new Date().toString()
    }

    const createdMessage = await messageRepository.create(message);
    
    expect(createdMessage?.username).toBe(message.username);
    expect(createdMessage?.email).toBe(message.email);
    expect(createdMessage?.text).toBe(message.text);
  });

})