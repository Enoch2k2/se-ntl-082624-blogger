import { useState } from 'react'
import BlogList from './components/BlogList'
import Header from './components/Header'
import { data } from './data'

function App() {
  const [blogs, setBlogs] = useState(data)
  
  // console.log(blogs)
  // function displayH1() {
  //   if(false) {
  //     return <h1>Hello World</h1>
  //   } else {
  //     return <h1>Goodbye World!</h1>
  //   }
  // }

  function addBlog() {
    let randomNum = Math.floor(Math.random() * 10000) + 1
    const blog =  {
      title: "Blog " + randomNum,
      author: "Bob",
      content: `Blog ${randomNum} Content`
    }

    setBlogs([...blogs, blog])
  }

  console.log('blogs', blogs)
  console.log('app render')

  function cancelCopy(event) {
    event.preventDefault()
    alert("YOU SHALL NOT PASS! Copy i mean copy")
  }

  return (
    <div onCopy={cancelCopy}>
      <Header />
      <button onClick={addBlog}>Add Blog</button>
      <BlogList blogs={blogs} />
    </div>
  )
}

// const App = () => {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   )
// }


// {true ? <div>
//   <h1>Hello World</h1>
//   <h3>{name}</h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab impedit blanditiis libero explicabo, perferendis provident quis iusto ex dolorem enim iure, dolore quod eveniet omnis rem? Corporis, maiores nostrum?</p>
// </div> : <h1>Goodbye World</h1>}

export default App
