import { MessageRepository } from '../../repositories/port';
import { CreateMessageUseCase } from './CreateMessageUseCase';
import dotenv from 'dotenv'
import { MessageProps } from '../../types/messageTypes';
import { fakeDatabaseMessages } from '../../mocks/messageMocks';
import { ObjectId } from 'mongodb';
import { InvalidUsernameError } from '../errors/InvalidUsernameError';
import { InvalidEmailError } from '../errors/InvalidEmailError';

dotenv.config()

describe('Testing CreateMessageUseCase', () => {
  const messageMongodbRepository: MessageRepository = {
    findAll: jest.fn(async () => fakeDatabaseMessages),
    create: jest.fn(async (message: MessageProps) => fakeDatabaseMessages[0])
  }
  const createMessageUseCase = new CreateMessageUseCase(messageMongodbRepository);

  test('Should create a new message', async () => {
    const message =  {
    username: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
    }

    const messageFromDatabase = {
      ...message,
      _id: new ObjectId(),
      createdAt: new Date(message.createdAt)
    }

    jest.spyOn(messageMongodbRepository, 'create').mockResolvedValue(messageFromDatabase)

    const result = await createMessageUseCase.execute(message)
    expect(result).toBeTruthy()
    expect(result.username).toBe(message.username)
  });

  test('Should throw error if username is invalid', async () => {
    const message =  {
    username: 'Joseth#',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
    }

    expect(createMessageUseCase.execute(message)).rejects.toThrow(InvalidUsernameError)
  });

  test('Should throw error if email is invalid', async () => {
    const message =  {
    username: 'Joseth',
    email: "joemail.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
    }

    expect(createMessageUseCase.execute(message)).rejects.toThrow(InvalidEmailError)
  });


})