interface ButtonProps {
  label: string
}

export function Button({label}: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white font-bold rounded-md py-1 cursor-pointer hover:bg-sky-500 transition delay-5 ease-linear" type="submit">
      {label}
    </button>
  )
}