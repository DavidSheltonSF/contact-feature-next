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
    <div className="flex flex-col w-full max-lg:items-center gap-2">
      <label className="font-bold max-lg:text-3xl" htmlFor={id}>{label}</label>
      <input 
      className=" outline-none border-1 border-solid border-gray-200 rounded-sm py-1 pl-3 focus:border-sky-500 focus:border-sky-500 invalid:focus:border-pink-600 invalid:focus:text-pink-600 transition duration-300 transition duration-300 max-lg:p-5 max-lg:text-xl w-full" 
      type={type} id={id}
      name={name}
      placeholder={placeholder}
      required
      />
    </div>
  )
}