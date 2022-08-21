import UserList from "../users/UserList"
import UserSearch from "../users/UserSearch"

function Showcase() {
  return (
    <div className="lg:p-8 lg:py-0">
      <UserSearch />
      <UserList />
    </div>
  )
}

export default Showcase