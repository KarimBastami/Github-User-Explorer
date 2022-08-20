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
        <a href={html_url} rel="noreferrer" target="_blank" className="flex flex-row items-center text-xl mb-2 font-semibold">
          <FaLink className="mr-2"/> 
          {name} 
        </a>
        {description ? <p className="mb-3">{description}</p> : 
                       <p className="mb-3">(No project description)</p>
        }
        
        <div className="flex flex-row">
          <div className="badge badge-info badge-lg mr-2">
            <FaEye className="mr-2 mt-0.5"/>
            {watchers_count}
          </div>

          <div className="badge badge-warning badge-lg mr-2">
            <FaStar className="mr-2 mt-0.5"/>
            {stargazers_count}
          </div>
          
          <div className="badge badge-success badge-lg mr-2">
            <FaUtensils className="mr-2 mt-0.5"/>
            {forks}
          </div>

          <div className="badge badge-error badge-lg mr-2">
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