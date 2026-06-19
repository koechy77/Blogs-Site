
import BlogList from "../components/BlogList";



const Home = ({ blogs, setBlogs }) => {
  

  

  function handleDelete(id) {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }


  return (

    <div>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}

export default Home
