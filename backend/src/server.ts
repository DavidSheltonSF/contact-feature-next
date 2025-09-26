import express, {type Response, type Request} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { FindAllMessagesController } from './controllers/FindAllMessagesController';
import { CreateMessageController } from './controllers/CreateMessageController';

const app = express()
const port = 8080

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const findAllMessagesController = new FindAllMessagesController();
const createMessageController = new CreateMessageController();


app.get('/messages', findAllMessagesController.handle);


app.post('/messages', createMessageController.handle);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})