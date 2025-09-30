export interface TextAreaProps {
  id: string
  label: string;
  placeholder: string;
  name: string;
}

export function TextAreaWithLabel(props: TextAreaProps) {

  const { id, label, placeholder, name} = props
  return (
     <div className="flex flex-col flex-1 w-full max-lg:items-center gap-2">
        <label className="font-bold max-lg:text-3xl" htmlFor="input-message">{label}</label>
        <textarea 
        className="outline-none border-1 border-solid border-gray-200 rounded-sm pl-3 focus:border-sky-500 transition duration-300 max-lg:text-xl w-full h-30" 
        name={name}
        id={id} 
        placeholder={placeholder}
        required
        ></textarea>
    </div>
  )
}