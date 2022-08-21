import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound404() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-8xl xs:text-7xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl xs:text-2xl mb-12">404 - Page Not Found</p>
          <Link to="/" className="btn btn-accent btn-lg xs:btn-md">
            <FaHome className="mr-2"/>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound404