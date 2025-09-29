export function NavBar() {
  return (
    <header>
      <nav className="flex p-5 bg-gray-50 drop-shadow-sm">
        <div className="mr-auto">
          <img className="rounded-md" src="websiteIcon.png" alt="" />
        </div>
        <span className="bg-green-200 py-1 px-2 rounded-2xl font-bold">
          Live Demo
        </span>
      </nav>
    </header>
  )
}