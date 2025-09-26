import { DomainError } from "./DomainError";

export class InvalidEmailError extends Error implements DomainError  {
  constructor(email: string){
    super(`Email ${email} invalid`);
    this.name = 'InvalidEmailError';
  }
}