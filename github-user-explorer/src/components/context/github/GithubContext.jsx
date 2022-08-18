import { createContext, useState } from "react";

const GithubContext = createContext()
const githubApi = "https://api.github.com"

export const GithubProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)


  const getAllUsers = async () => {
    setLoading(true)

    const response = await fetch(`${githubApi}/users`,
    {
      headers: {
        "Content-Type": "application/json" 
      }
    })
    
    if (response.ok) {
      const usersData = await response.json(); 
      Array.isArray(usersData) ? setUsers(usersData) : setUsers([usersData])

      setLoading(false)
    }
  }


  return <GithubContext.Provider value={{
            users,
            loading,
          }}> { children }
        </GithubContext.Provider>
}

export default GithubContext