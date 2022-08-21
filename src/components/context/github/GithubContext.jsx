import { createContext, useState } from "react";


const GithubContext = createContext()
const githubApi = "https://api.github.com"

export const GithubProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(false)

  const clearUsers = () => setUsers([]) 

  const getUser = async (query) => {
    setLoading(true)

    const response = await fetch(`${githubApi}/search/users?q=${query}`,
    {
      headers: {
        "Content-Type": "application/json" 
      }
    })
    
    if (response.ok) {
      const { items } = await response.json()
      Array.isArray(items) ? setUsers(items) : setUsers([items])
    }

    setLoading(false)
  }


  const getOneUser = async (loginId) => {
    setLoading(true)

    const response = await fetch(`${githubApi}/users/${loginId}`,
    {
      headers: {
        "Content-Type": "application/json" 
      }
    })
    
    if (response.ok) {
      const userData = await response.json(); 
      setUser(userData)
    } 
    else {
      window.location = "/notfound"
    }

    setLoading(false)
  }


  const getUserRepos = async (loginId) => {
    setLoading(true)

    const response = await fetch(`${githubApi}/users/${loginId}/repos`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.ok) {
      const repos = await response.json()
      Array.isArray(repos) ? setUserRepos(repos) : setUserRepos([repos])
    }

    setLoading(false)
  }


  return <GithubContext.Provider value={{
            users,
            user,
            loading,
            userRepos,
            getUser,
            clearUsers,
            getOneUser,
            getUserRepos,
          }}> { children }
        </GithubContext.Provider>
}

export default GithubContext