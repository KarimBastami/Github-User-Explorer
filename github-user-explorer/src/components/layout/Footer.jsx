import { FaSlackHash, FaLinkedinIn } from "react-icons/fa"

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer items-center p-4 bg-gray-700 text-primary-content">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center flex">
          <FaSlackHash className="text-3xl mr-2"/>
          <p>Copyright © {currentYear} - All right reserved</p>
        </div>

        <a href="https://linkedin.com/in/karim-bastami" 
           rel="noreferrer" 
           target="_blank" 
           className="btn btn-ghost btn-md">
            
          <FaLinkedinIn className="text-2xl"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer