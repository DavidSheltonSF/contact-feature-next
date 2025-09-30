interface ButtonProps {
  label: string
}

export function Button({label}: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white font-bold rounded-md py-1 cursor-pointer hover:bg-sky-500 transition delay-5 ease-linear w-full" type="submit">
      <span className="flex justify-center items-center gap-2 max-lg:gap-10 max-lg:text-3xl">
        <img className="max-lg:w-12" src="send-icon.svg" alt="" />
        {label}
      </span>
    </button>
  )
}