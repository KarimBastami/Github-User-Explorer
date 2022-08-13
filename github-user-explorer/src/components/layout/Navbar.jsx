import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-primary-content">
      <div className="flex justify-center container mx-auto"> 
        <Link to="/" className="flex items-center text-lg font-bold">
          <FaGithub className="text-3xl mr-2"/>
          <h2>Github User Explorer</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar