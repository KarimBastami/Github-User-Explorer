import GithubContext from "../context/github/GithubContext"
import Spinner from "../layout/Spinner"
import RepoCell from "../repo/RepoCell"

import { FaCode, FaUserFriends, FaUsers } from "react-icons/fa"
import { IoArrowBackCircleOutline } from "react-icons/io5"

import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function UserProfile() {

  const params = useParams()
  const { getOneUser, user, loading, getUserRepos, userRepos } = useContext(GithubContext)

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    email,
    hireable
  } = user


  useEffect(() => {
    getOneUser(params.id)
    getUserRepos(params.id)
  }, [])


  if (!loading) {
    return (
      <div className="text-slate-200 w-full mx-auto xl:w-9/12 lg:w-10/12">
        <Link to="/" className="btn btn-ghost mb-4">
         <IoArrowBackCircleOutline className="mr-3 text-3xl"/> Back To Home
        </Link>

        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 md:gap-8">
          <div className="custom-image-card mb-6 md:mb-0">
            <div className="card rounded-lg shadow-xl image-full">
              <figure >
                <img src={avatar_url} alt="profile picture"/>
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
                            <div className="badge badge-error mt-2">Not Hireable</div>
                }
              </div>
              {bio ? <p className="text-gray-300">{bio}</p> : <p className="text-gray-300">(NO BIO)</p>}
              <div className="card-actions">
                <a href={html_url} className="btn btn-outline mt-4" target="_blank" rel="noreferrer"> 
                Visit Github Profile</a>
              </div>
            </div>

            <div className="stats w-full shadow-lg text-slate-200">
              <div className="stat">
                <div className="stat-title">Location</div>
                {location ? <div className="stat-value text-lg">{location}</div> :
                            <div className="stat-value text-lg">(No Location)</div>
                }
              </div>

              <div className="stat">
                <div className="stat-title">Website</div>
                {blog ? <a href={`https://${blog}`} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="stat-value text-lg">{blog}
                            </a> :
                            <div className="stat-value text-lg">(No website)</div>
                }
              </div>

              <div className="stat">
                <div className="stat-title">Contact</div>
                {email ? <div className="stat-value text-lg">{email}</div> :
                            <div className="stat-value text-lg">(No info)</div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-6 mb-6 rounded-lg shadow-lg bg-base-100 stats text-slate-200">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaUsers className="text-3xl md:text-5xl"/>        
            </div>
            <div className="stat-title">Followers</div>
            <div className="stat-value text-3xl md:text-4xl">{followers}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <FaUserFriends className="text-3xl md:text-5xl"/>        
            </div>
            <div className="stat-title">Following</div>
            <div className="stat-value text-3xl md:text-4xl">{following}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <FaCode className="text-3xl md:text-5xl"/>        
            </div>
            <div className="stat-title">Public Repos</div>
            <div className="stat-value text-3xl md:text-4xl">{public_repos}</div>
          </div>
        </div>

        <div className="card rounded-lg shadow-lg">
          <div className="card-body">
            <h2 className="card-title mb-4 text-2xl">Latest 10 Repositories</h2>
            <ul>
              {userRepos.length !== 0 
                ? 
                userRepos.map((repo, i) => i < 10 && (<li key={repo.id}><RepoCell _repo={repo} /></li>))
                :
                <p className="">(No repositories found)</p>
              }     
            </ul>
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