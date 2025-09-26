import {type Request, type Response} from 'express'
export class CreateMessageController {

  async handle(req: Request, res: Response) {

    try {
      const body = req.body

      if (!body){
        return res.status(400).send({
          message: 'Request body is missing'
        })
      }

      const {username, email, message} = body;

      
      if (!username){
        return res.status(400).send({
          message: 'Username is missing'
        })
      }

      if (!email){
        return res.status(400).send({
          message: 'User email is required'
        })
      }

      if (!message){
        return res.status(400).send({
          message: 'User message is required'
        })
      }

      return res.status(200).send({
        message: 'Message registred successfuly'
      })

    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: 'Internal server error'
      })
    }
  }
}