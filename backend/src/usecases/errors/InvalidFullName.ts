import { DomainError } from "./DomainError";

export class InvalidFullNameError extends Error implements DomainError  {
  constructor(fullName: string){
    super(`Full name ${fullName} invalid`);
    this.name = 'InvalidFullNameError';
  }
}