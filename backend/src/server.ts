import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { FindAllMessagesController } from './controllers/FindAllMessagesController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { MessageMongodbRepository } from './repositories/MessageMongodbRepository';
import { FindAllMessagesUseCase } from './usecases/FindAllMessagesUseCase/FindAllMessagesUseCase';
import { CreateMessageUseCase } from './usecases/CreateMessageUseCase/CreateMessageUseCase';
import { MongodbHelper } from './repositories/helpers/MongodbHelper';
import dotenv from 'dotenv';
import { adaptExpress } from './adapter/adaptExpress';

dotenv.config()

const app = express()
const port = 8080

app.use(express.json())
app.use(cookieParser())
app.use(cors())

await (async () => {
  const MONGO_URI = process.env.MONGO_URI
  if(!MONGO_URI){
    throw Error('Mongodb URI was not found')
  }

  const mongoHelper = MongodbHelper.getInstance()
  await mongoHelper.connect(MONGO_URI);

  const messageRepository = new MessageMongodbRepository()

  const findAllMessagesUseCase = new FindAllMessagesUseCase(messageRepository)
  const findAllMessagesController = new FindAllMessagesController(findAllMessagesUseCase);

  const createMessageUseCase = new CreateMessageUseCase(messageRepository)
  const createMessageController = new CreateMessageController(createMessageUseCase);


  app.get('/messages', adaptExpress(findAllMessagesController));
  app.post('/messages', adaptExpress(createMessageController));

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
})()