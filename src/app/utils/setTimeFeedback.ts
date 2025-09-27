export function setTimeFeedback(date: string | Date) {
  const dateObj = new Date(date);

  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();

  console.log(minutes)

  if(minutes < 1) {
    return 'less than a minute ago'
  }
  
  if(minutes >= 1) {
    return `${minutes} minute(s) ago`
  }

  if(hours >= 1) {
    return `${minutes/60} hour(s) ago`
  }

  if(hours >= 24) {
    return `${hours/24} day(s) ago`
  }
}