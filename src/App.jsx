import BlogList from './components/BlogList'
import Header from './components/Header'
import { blogs } from './data'

function App() {
  
  // console.log(blogs)
  // function displayH1() {
  //   if(false) {
  //     return <h1>Hello World</h1>
  //   } else {
  //     return <h1>Goodbye World!</h1>
  //   }
  // }

  return (
    <>
      <Header />
      <BlogList blogs={blogs} />
    </>
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
