export function validateEmail(email: string) {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(email.length > 255 || !email.match(emailRegex)) {
    return false
  }

  return true
}