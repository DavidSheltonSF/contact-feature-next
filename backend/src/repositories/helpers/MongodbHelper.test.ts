import { MongodbHelper } from "./MongodbHelper"
import dotenv from 'dotenv'
dotenv.config()

describe('Testing MongodbHelper', () => {
  test('Should allow one single instance of the class', () => {
    const mongoHelper1 = MongodbHelper.getInstance();
    const mongoHelper2 = MongodbHelper.getInstance()

    expect(mongoHelper1).toBe(mongoHelper2)
  });

})