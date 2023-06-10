import { FaUserCircle } from "react-icons/fa"

const Navbar = () => {
  const flexBetween = "flex justify-between items-center"
  return (
    <div className="border-b border-body-500">
      <div className="w-5/6 mx-auto">
      <nav className={`h-16 ${flexBetween}`}>
        {/* left side */}
        <div>
          <h1 className="text-2xl text-white">Home</h1>
        </div>

        {/* right side */}
        <div className={flexBetween}>
          <ul className={`${flexBetween} gap-4`}>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
            <li className="text-white">Login</li>
            <li className="text-white px-2 py-1 rounded-md border border-white mr-4 hover:cursor-pointer hover:bg-body-300 hover:text-body-600">+ Add Listing</li>
            <FaUserCircle className="text-cblue-500 h-7 w-7"/>
          </ul>
        </div>

      </nav>

    </div>
    </div>
  )
}

export default Navbar