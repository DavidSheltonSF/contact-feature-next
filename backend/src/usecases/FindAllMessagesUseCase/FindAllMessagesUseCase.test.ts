import { MessageRepository } from '../../repositories/port';
import { MongodbHelper } from '../../repositories/helpers/MongodbHelper';
import { FindAllMessagesUseCase } from './FindAllMessagesUseCase';
import dotenv from 'dotenv'
import { MessageProps } from '../../types/messageTypes';
import { fakeDatabaseMessages } from '../../mocks/messageMocks';

dotenv.config()

describe('Testing FindAllMessagesUseCase', () => {
  const mongoHelper = MongodbHelper.getInstance()
  const messageMongodbRepository: MessageRepository = {
    findAll: jest.fn(async () => fakeDatabaseMessages),
    create: jest.fn(async (message: MessageProps) => fakeDatabaseMessages[0])
  }
  const findAllMessagesUseCase = new FindAllMessagesUseCase(messageMongodbRepository);

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

  test('Should find all messages', async () => {
    const result = await findAllMessagesUseCase.execute()
    expect(result).toBeTruthy()
    expect(result[0].id).toBe(fakeDatabaseMessages[0]._id.toString())
  });

})