import { createContext,  useState, useRef } from "react";
import { data } from '../data'

const BlogContext = createContext([])

function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(data)

  const id = useRef(6)

  function addBlog(blog) {
    blog.id = id.current
    id.current++
    setBlogs([...blogs, blog])
  }

  return <BlogContext.Provider value={{ addBlog, blogs, id }}>{ children }</BlogContext.Provider>
}

export { BlogProvider, BlogContext }