import Spinner from "../layout/Spinner"
import UserCell from "./UserCell"
import GithubContext from "../context/github/GithubContext"

import { useEffect, useContext } from "react"

function UserList() {

  const { users, loading, getAllUsers } = useContext(GithubContext)

  useEffect(() => {
    getAllUsers() 

  }, [])


  if (!loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-3">
        {users.length !== 0 && users.map((user) => {
          return <UserCell key={user.id} 
                           _user={user}/>
        })}
      </div>
    )
  }
  else { 
    return <Spinner />
  }
}

export default UserList