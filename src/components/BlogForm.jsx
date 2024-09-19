import React, { useContext, useState } from 'react'
import { BlogContext } from '../context/blogContext'

const initialState = {
  title: "",
  author: "",
  content: ""
}

function BlogForm() {

  const [blog, setBlog] = useState(initialState)
  const { addBlog } = useContext(BlogContext)

  function handleSubmit(event) {
    event.preventDefault()

    addBlog(blog)
    setBlog(initialState)
  }

  function handleChange(event) {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h3>Create Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={blog.title} onChange={handleChange} />
        </div><br />
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" id="author" value={blog.author} onChange={handleChange} />
        </div><br />
        <div>
          <label htmlFor="content">Content: </label><br />
          <textarea name="content" id="content" rows="15" cols="60"  value={blog.content} onChange={handleChange}></textarea>
        </div>
        <input type="submit" value="Create Blog" />
      </form>
    </div>
  )
}

export default BlogForm