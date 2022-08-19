import GithubContext from "../context/github/GithubContext"
import Spinner from "../layout/Spinner"

import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { IoArrowBackCircleOutline } from "react-icons/io5"

import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function UserProfile() {

  const params = useParams()
  const { getOneUser, user, loading } = useContext(GithubContext)

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user


  useEffect(() => {
    getOneUser(params.id)
  }, [])


  if (!loading) {
    return (
      <div className="text-white">
        <Link to="/" className="btn btn-ghost mb-4">
         <IoArrowBackCircleOutline className="mr-3 text-3xl"/> Back To Home
        </Link>

        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 md:gap-8">
          <div className="custom-image-card">
            <div className="card rounded-lg shadow-xl image-full">
              <figure>
                <img src={avatar_url} alt="profile picture" />
              </figure>
              <div className="card-body gap-0 justify-end">
                <h2 className="card-title text-white">{name}</h2>
                <h3 className="text-white">{login}</h3>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6 space-y-2">
              <div className="flex flex-row items-center">
                <h1 className="card-title text-3xl mr-3">{name}</h1>
                {hireable ? <div className="badge badge-info mt-2">Hireable</div> : 
                <div className="badge badge-error mt-2">Not Hireable</div>}
              </div>
              <p>{bio}</p>
              <div className="card-actions">
                <a href={html_url} className="btn btn-outline mt-4" target="_blank" rel="noreferrer"> 
                Visit Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <Spinner />
  }
}

export default UserProfile