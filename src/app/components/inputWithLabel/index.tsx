export interface InputProps {
  id: string
  label: string;
  placeholder: string;
  name: string;
  type: string
}

export function InputWithLabel(props: InputProps) {

  const { id, label, placeholder, name, type} = props

  return (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={id}>{label}</label>
      <input 
      className=" outline-none border-1 border-solid border-gray-200 rounded-sm py-1 pl-3 focus:border-sky-500 invalid:border-pink-600 focus:border-sky-500 invalid:text-pink-600 transition duration-300 transition duration-300" 
      type={type} id={id}
      name={name}
      placeholder={placeholder}
      />
    </div>
  )
}