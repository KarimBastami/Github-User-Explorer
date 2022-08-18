import { GoSearch } from "react-icons/go"
import { useState } from "react"

function UserSearch() {

  const [query, setQuery] = useState("") 

  const handleInputChange = e => setQuery(e.target.value)
  const handleClear = e => setQuery("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === "") {
      alert("Input Field Should Not Be Blank")
    }
    else {
      // Call API
    }
  }
  

  return (
    <div className="grid grid-cols-1 md:grid-col-2 gap-8 mb-8">
      <form onSubmit={handleSubmit} className="form-control">
        <div className="input-group">
          <input type="text"
                 placeholder="Search..."
                 value={query}
                 onChange={handleInputChange}
                 className="input input-bordered input-lg pr-40 bg-accent-content text-black focus:outline-0"
                 />
          <button type="submit" className="btn btn-square btn-lg w-24">
            <GoSearch className="text-3xl"/>
          </button>
        </div>
      </form>
      <div>
        <button onClick={handleClear} className="btn btn-ghost btn-lg">Clear</button>
      </div>
    </div>
  )
}

export default UserSearch