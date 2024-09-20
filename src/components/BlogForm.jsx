import React, { useContext } from 'react'
import { BlogContext } from '../context/blogContext'
import { useFormChange } from '../custom_hooks/Form'

const initialState = {
  title: "",
  author: "",
  content: ""
}

function BlogForm() {
  const { addBlog } = useContext(BlogContext)
  const [blog, handleChange, handleSubmit] = useFormChange(initialState, addBlog)
  
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