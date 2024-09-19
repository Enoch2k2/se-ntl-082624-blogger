import { createContext,  useState } from "react";
import { data } from '../data'

const BlogContext = createContext([])

function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(data)
  console.log(children)
  function addBlog(blog) {
    setBlogs([...blogs, blog])
  }

  return <BlogContext.Provider value={{ addBlog, blogs }}>{ children }</BlogContext.Provider>
}

export { BlogProvider, BlogContext }