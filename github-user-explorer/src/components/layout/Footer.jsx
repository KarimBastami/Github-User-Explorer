import { TbBrandGithub } from "react-icons/tb"
import { FaSlackHash } from "react-icons/fa" 

function Footer() {


  return (
    <footer className="footer items-center p-4 bg-gray-700 text-primary-content">
      <div className="container mx-auto flex flex-col items-center">
        <div className="items-center flex flex-col">
          <FaSlackHash className="text-4xl"/>
          <p className="text-lg text-center">Check the project source code "ironically" on</p>
          <a href="https://github.com/KarimBastami/Github-User-Explorer" 
             rel="noreferrer" 
             target="_blank"
             className="text-lg ml-1 text-accent hover:text-accent-focus    cursor-pointer">
            <div className="flex flex-row items-center">
              <TbBrandGithub className="mr-0.5"/>
              <h3>GITHUB</h3>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer