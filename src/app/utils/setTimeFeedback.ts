export function setTimeFeedback(date: string | Date) {
  const dateTime = new Date(date).getTime();
  const now = new Date().getTime();

  const miliseconds = now - dateTime
  const seconds = miliseconds / 1000;
  const minutes = seconds / 60
  const hours = minutes / 60

  console.log(minutes)

  if(minutes < 1) {
    return 'less than a minute ago'
  }
  
  if(minutes >= 1) {
    return `${Math.round(minutes)} minute(s) ago`
  }

  if(hours >= 1) {
    return `${Math.round(hours)} hour(s) ago`
  }

  if(hours >= 24) {
    return `${Math.round(hours/24)} day(s) ago`
  }
}