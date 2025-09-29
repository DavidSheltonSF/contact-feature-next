export interface InputProps {
  id: string
  label: string;
  placeholder: string;
  name: string;
}

export function InputWithLabel(props: InputProps) {

  const { id, label, placeholder, name} = props

  return (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={id}>{label}</label>
      <input 
      className="border-1 border-solid border-gray-200 rounded-sm py-1 pl-3" 
      type="text" id={id}
      name={name}
      placeholder={placeholder}
      />
    </div>
  )
}