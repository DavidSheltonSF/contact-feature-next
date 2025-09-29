export interface TextAreaProps {
  id: string
  label: string;
  placeholder: string;
  name: string;
}

export function TextAreaWithLabel(props: TextAreaProps) {

  const { id, label, placeholder, name} = props
  return (
     <div className="flex flex-col flex-1">
        <label className="font-bold" htmlFor="input-message">{label}</label>
        <textarea 
        className="outline-none border-1 border-solid border-gray-200 rounded-sm flex-1 pl-3 focus:border-sky-500 transition duration-300" 
        name={name}
        id={id} 
        placeholder={placeholder}
        ></textarea>
    </div>
  )
}