import PropTypes from "prop-types"

import { FaEye, FaLink, FaStar, FaUtensils } from "react-icons/fa"  
import { MdError } from "react-icons/md"

function RepoCell({ _repo }) {

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count
  } = _repo


  return (
    <div className="card shadow-md rounded-lg mb-4 bg-neutral">
      <div className="card-body">
        <a href={html_url} rel="noreferrer" target="_blank" className="flex flex-col md:flex-row items-center text-xl mb-2 font-semibold justify-center md:justify-start xs:text-sm">
          <FaLink className="mr-2"/> 
          <h2>{name}</h2> 
        </a>
        {description ? <p className="mb-3 text-center md:text-start xs:text-sm">{description}</p> : 
                       <p className="mb-3 text-center md:text-start xs:text-sm">(No project description)</p>
        }
        
        <div className="grid grid-cols-2 xs:grid-cols-1 gap-y-3 justify-items-center md:flex md:flex-row">
          <div className="badge badge-info badge-lg md:mr-2">
            <FaEye className="mr-2 mt-0.5"/>
            {watchers_count}
          </div>

          <div className="badge badge-warning badge-lg md:mr-2">
            <FaStar className="mr-2 mt-0.5"/>
            {stargazers_count}
          </div>
          
          <div className="badge badge-success badge-lg md:mr-2">
            <FaUtensils className="mr-2 mt-0.5"/>
            {forks}
          </div>

          <div className="badge badge-error badge-lg md:mr-2">
            <MdError className="mr-2 mt-0.5 text-xl"/>
            {open_issues}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoCell.propTypes = {
  _repo: PropTypes.object.isRequired
}

export default RepoCell