import { createContext, useState } from "react";


const GithubContext = createContext()
const githubApi = "https://api.github.com"

export const GithubProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
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
      const { items } = await response.json(); 
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
      console.log(userData)
      setUser(userData)
    } 
    else {
      window.location = "/notfound"
    }

    setLoading(false)
  }



  return <GithubContext.Provider value={{
            users,
            user,
            loading,
            getUser,
            clearUsers,
            getOneUser,
          }}> { children }
        </GithubContext.Provider>
}

export default GithubContext