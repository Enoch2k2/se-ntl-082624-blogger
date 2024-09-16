import React from 'react'

function BlogCard({ title, author, content, color }) {
  // console.log('blog card props', props)
  return (
    <div>
      <h3 style={{ color: color }}>{title}</h3>
      <p>By: {author}</p>
      <p>{content}</p>
    </div>
  )
}

export default BlogCard