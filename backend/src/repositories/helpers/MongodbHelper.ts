import {MongoClient, Collection} from 'mongodb'

export class MongodbHelper {
  static instance: MongodbHelper | null = null
  client: MongoClient | null = null;
  
  static getInstance(): MongodbHelper {
    if(this.instance === null){
      this.instance = new MongodbHelper()
    }
    return this.instance
  }

  async connect(uri: string): Promise<void>{
    if(this.client === null) {
      this.client = await MongoClient.connect(uri)
    }
  }

  async disconnect(): Promise<void> {
    if(this.client === null){
      throw Error('Database is not connected');
    }

    this.client.close();
  }

  getCollection(name: string): Collection {
    if(this.client === null){
      throw Error('Database is not connected');
    }

    return this.client.db().collection(name);
  }

  async clearCollection(name: string): Promise<void> {
    await this.client?.db().collection(name).deleteMany({})
  }
}