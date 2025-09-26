import { DomainError } from "./DomainError";

export class InvalidUsernameError extends Error implements DomainError  {
  constructor(username: string){
    super(`Username ${username} invalid`);
    this.name = 'InvalidUsernameError';
  }
}