export function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-center p-2 bg-gray-50 drop-shadow-sm">
        <div className="mr-auto">
          <img className="rounded-md" src="websiteIcon.png" alt="" />
        </div>
        <span className="flex items-center h-10 bg-green-200 px-2 rounded-2xl font-bold">
          Live Demo
        </span>
      </nav>
    </header>
  )
}