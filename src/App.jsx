import { useState } from 'react'
import BlogList from './components/BlogList'
import Header from './components/Header'
import { data } from './data'
import BlogForm from './components/BlogForm'

function App() {
  const [blogs, setBlogs] = useState(data)

  function addBlog(blog) {
    setBlogs([...blogs, blog])
  }

  console.log('blogs', blogs)
  console.log('app render')

  // function cancelCopy(event) {
  //   event.preventDefault()
  //   alert("YOU SHALL NOT PASS! Copy i mean copy")
  // }

  return (
    <div>
      <Header />
      <BlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
