import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { BlogContext } from "../context/blogContext"


function Header() {
  const [text, setText] = useState("Blogger")
  const { user, loggedIn, login, logout } = useContext(UserContext)

  // const [color, setColor] = useState("green")
  // const [btnColor, setBtnColor] = useState("red")

  // function handleTextClick(event) {
  //   setText(prevState => prevState + "!")
  // }

  // function handleColorChange(event) {
  //   setColor("purple")
  // }

  // function changeButtonColorOver(event) {
  //   setBtnColor("yellow")
  // }

  // function changeButtonColorOut(event) {
  //   setBtnColor("red")
  // }

  return (
    <div>
       <h1>{text}</h1>
       { loggedIn ? <h2>Welcome, {user.username}</h2> : null}
       <button onClick={loggedIn ? logout : login}>{loggedIn ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Header