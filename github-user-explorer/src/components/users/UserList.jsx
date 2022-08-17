import Spinner from "../layout/Spinner"
import { useEffect, useState } from "react"

function UserList() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const githubApiUsers = "https://api.github.com/users"

  const getAllUsers = async () => {
    const response = await fetch(githubApiUsers,
    {
      headers: {
        "Content-Type": "application/json" 
      }
    })
  
    const usersData = await response.json();
    
    setUsers(usersData)
    setLoading(false)
  }


  useEffect(() => {
    getAllUsers() 
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {users.map((user) => {
          return <h2 key={user.id}>{user.login}</h2>
        })}
      </div>
    )
  }
  else {
    return <Spinner />
  }
}

export default UserList