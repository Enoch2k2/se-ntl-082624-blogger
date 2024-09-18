import BlogList from './components/BlogList'
import Header from './components/Header'
import { blogs } from './data'

function App() {

  return (
    <>
      <Header />
      <BlogList blogs={blogs} />
    </>
  )
}

export default App
