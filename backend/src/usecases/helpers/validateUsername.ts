export function validateUsername(username: string) {

  const usernameReguex = /^[a-zA-Z0-9]+$/;

  if(username.length > 30 || !username.match(usernameReguex)) {
    return false
  }

  return true
}