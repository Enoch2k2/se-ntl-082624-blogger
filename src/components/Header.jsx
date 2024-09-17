import { useState } from "react"


function Header() {
  const [text, setText] = useState("Blogger")
  const [color, setColor] = useState("green")
  const [btnColor, setBtnColor] = useState("red")

  function handleTextClick(event) {
    setText(prevState => prevState + "!")
  }

  function handleColorChange(event) {
    setColor("purple")
  }

  function changeButtonColorOver(event) {
    setBtnColor("yellow")
  }

  function changeButtonColorOut(event) {
    setBtnColor("red")
  }

  return (
    <div>
      <h1 style={{color: color}} onClick={handleTextClick}>{text}</h1>
      <button 
        style={{backgroundColor: btnColor}}
        onClick={handleColorChange}
        onMouseOver={changeButtonColorOver}
        onMouseOut={changeButtonColorOut}
      >
        Change Color
      </button>
    </div>
  )
}

export default Header