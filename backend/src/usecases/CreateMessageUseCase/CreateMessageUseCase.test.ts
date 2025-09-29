import { MessageRepository } from '../../repositories/port';
import { CreateMessageUseCase } from './CreateMessageUseCase';
import dotenv from 'dotenv'
import { MessageProps } from '../../types/messageTypes';
import { fakeDatabaseMessages } from '../../mocks/messageMocks';
import { ObjectId } from 'mongodb';
import { InvalidFullNameError } from '../errors/InvalidFullName';
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
    fullName: 'Joseth Zenodo Tesvo',
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
    console.log(result)
    expect(result).toBeTruthy()
    expect(result.fullName).toBe(message.fullName)
  });

  test('Should throw error if fullName is invalid', async () => {
    const message =  {
    fullName: 'Joseth#',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
    }

    expect(createMessageUseCase.execute(message)).rejects.toThrow(InvalidFullNameError)
  });

  test('Should throw error if email is invalid', async () => {
    const message =  {
    fullName: 'Joseth Zora Vargo',
    email: "joemail.com",
    text: "This is a test message",
    createdAt: "2020-01-22"
    }

    expect(createMessageUseCase.execute(message)).rejects.toThrow(InvalidEmailError)
  });

})