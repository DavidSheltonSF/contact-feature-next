'use server'

export async function submitMessage(prevState: any, formData: FormData){
  try {
    const username = formData.get('username');
    const email = formData.get('email');
    const textMessage = formData.get('textMessage');

    const response = await fetch('http://localhost:8080/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // dizendo que o corpo é JSON
      },
      body: JSON.stringify({
        username,
        email,
        text: textMessage
      })
    });
    const data = await response.json()
    console.log(data)

    if(data.statusCode > 300){
      return {success: false, message: data.body}
    }

    return {success: true, data: {username, email, textMessage}}
  } catch (error) {
    console.log(error)
    return  {success: false, message: 'Something went wrong!'}
  }
  }