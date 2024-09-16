import BlogCard from "./BlogCard"


function BlogList({ blogs }) {

  const blogCards = blogs.map((blog, index) => <BlogCard key={index} {...blog} color="blue" />)

  return (
    <>
      <h3>Blog List</h3>

      <div id="blog-cards">
        { blogCards }
      </div>
    </>
  )
}

// function addTwoNums(num1, num2) {
//   return num1 + num2
// }

// addTwoNums(1, 3)
// addTwoNums(2, 2)
// addTwoNums(4, 4)
// addTwoNums(5, 7)
// addTwoNums(1, 9)

export default BlogList