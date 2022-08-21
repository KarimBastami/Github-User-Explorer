import GithubContext from "../context/github/GithubContext"
import AlertContext from "../context/alert/AlertContext"
import Alert from "../layout/Alert"

import { GoSearch } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState, useContext } from "react"


function UserSearch() {

  const [query, setQuery] = useState("") 
  const { users, getUser, clearUsers } = useContext(GithubContext)
  const { createAlert } = useContext(AlertContext)

  const handleInputChange = e => setQuery(e.target.value)


  const handleClear = () => {
    setQuery("")
    clearUsers()
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === "") {
      createAlert("Input field should not be blank", "error")
    }
    else {
      // Call API
      getUser(query)
    }
  }


  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 mb-8 md:justify-items-start">
      <form onSubmit={handleSubmit} className="form-control">
        <Alert />
        <div className="input-group">
          <input type="text"
                 placeholder="Search..."
                 value={query}
                 onChange={handleInputChange}
                 className="input input-bordered input-lg md:pr-40 xs:w-40 bg-accent-content text-black focus:outline-0"
                 />
          <button type="submit" className="btn btn-square btn-lg w-24">
            <GoSearch className="text-3xl"/>
          </button>
        </div>
      </form>

      {users.length !== 0 &&
        <div>
          <button onClick={handleClear} className="btn btn-outline btn-md"> 
            <RiDeleteBin6Line className="text-2xl mr-3"/> Clear
          </button>
        </div>
      }
    </div>
  )
}

export default UserSearch