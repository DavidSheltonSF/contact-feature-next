interface Props {
  type: string
  label?: string
}

export function SubmitionFeedbackMessage({type, label}: Props) {

  let feedbackElement = null

  if(type === 'success'){
    feedbackElement =  <div className="text-center bg-green-300 rounded-sm py-1">
        {label ? <span>{label}</span> : <span>Message sent successfuly!</span>}
    </div>
  }

   if(type === 'error'){
    feedbackElement =  <div className="text-center bg-red-300 rounded-sm py-1">
        {label ? <span>{label}</span> : <span>Something went wrong!</span>}
    </div>
  }

  return (
    feedbackElement
  )
}