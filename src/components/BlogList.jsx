

const BlogList = ({ blogs, handleDelete }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                {blogs.map((blog) => (
                    <div className="" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Author: {blog.author}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 py-3 px-5 rounded-sm" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogList