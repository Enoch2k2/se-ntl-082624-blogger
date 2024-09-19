import { useState } from 'react'
import BlogList from './components/BlogList'
import Header from './components/Header'

import BlogForm from './components/BlogForm'
import { BlogProvider } from './context/blogContext'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <div>
      <UserProvider>
        <Header />
        <BlogProvider>
          <BlogForm />
          <BlogList />
        </BlogProvider>
      </UserProvider>
    </div>
  )
}

export default App
