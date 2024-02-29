import { selectAllUsers } from "../user/userSlice"
import { useSelector } from "react-redux"

function UserList({userId}) {
    
  const users = useSelector(selectAllUsers)
  

  const author = users.find(user => user.name === userId)
  
  return (
    
    <div>by { author ? author.name : "unknow author "}</div>
  )
}

export default UserList