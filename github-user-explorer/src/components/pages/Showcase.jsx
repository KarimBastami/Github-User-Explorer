import UserList from "../users/UserList"
import UserSearch from "../users/UserSearch"

function Showcase() {
  return (
    <div className="lg:p-8">
      <UserSearch />
      <UserList />
    </div>
  )
}

export default Showcase