import { createContext, useState } from "react";

const GithubContext = createContext()
const githubApi = "https://api.github.com"

export const GithubProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)


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


  return <GithubContext.Provider value={{
            users,
            loading,
            getUser,
          }}> { children }
        </GithubContext.Provider>
}

export default GithubContext