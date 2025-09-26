import { MessageRepository } from '../../repositories/port';
import { FindAllMessagesUseCase } from './FindAllMessagesUseCase';
import dotenv from 'dotenv'
import { MessageProps } from '../../types/messageTypes';
import { fakeDatabaseMessages } from '../../mocks/messageMocks';

dotenv.config()

describe('Testing FindAllMessagesUseCase', () => {
  const messageMongodbRepository: MessageRepository = {
    findAll: jest.fn(async () => fakeDatabaseMessages),
    create: jest.fn(async (message: MessageProps) => fakeDatabaseMessages[0])
  }
  const findAllMessagesUseCase = new FindAllMessagesUseCase(messageMongodbRepository);

  test('Should find all messages', async () => {
    const result = await findAllMessagesUseCase.execute()
    expect(result).toBeTruthy()
    expect(result[0].id).toBe(fakeDatabaseMessages[0]._id.toString())
  });

})