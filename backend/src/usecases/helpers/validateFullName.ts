export function validateFullName(fullName: string) {

  const fullNameReguex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;

  if(fullName.length > 30 || !fullName.toLocaleLowerCase().match(fullNameReguex)) {
    return false
  }

  return true
}