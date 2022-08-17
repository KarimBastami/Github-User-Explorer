import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserCell({ _user: { login, avatar_url }  }) {
  return (
    <div className="card card-side card-compact shadow-lg bg-base-100 xs:items-center">
      <img src={avatar_url} className="rounded-full shadow-lg w-16 h-16" alt="avatar pic" />
      <div className="card-body flex-row justify-between xs:flex-col">
        <h2 className="card-title text-base">{login}</h2>
        <div className="card-actions">
          <Link className="btn btn-sm btn-accent" to={`/users/${login}`}> Visit Profile </Link>
        </div>
      </div>
    </div>
  )
}


UserCell.propTypes = {
  _user: PropTypes.object.isRequired
}


export default UserCell