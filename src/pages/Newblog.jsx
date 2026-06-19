import { useState } from "react";


const Newblog = ({ setBlogs }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState();
   

  function handleSubmit(e) {
    e.preventDefault();

    console.log("submitted");

    const newBlog = {
      id: Date.now(),
      title,
      body,
      author,
    };

    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);

    setTitle("");
    setBody("");
    setAuthor("");


  
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-fit gap-3">
        <h2 className="font-bold text-3xl text-blue-600 ">Add New Blog</h2>

        <form onSubmit={handleSubmit}>

          <label className="font-semibold text-xl text-blue-600">
            Blog Title
          </label>
          <br />

          <input className="border-2 border-gray-400" type="text" value={title} onChange={(e) => setTitle(e.target.value)}  required/>
          <br />
          <br />

          <label className="font-semibold text-xl text-blue-600">Blog Body</label>
          <br />

          <textarea value={body} onChange={(e) => setBody(e.target.value)} className="border-2 border-gray-400" minLength={5} maxLength={5000} required >
          </textarea>
          <br />
          <br />

          <label className="font-semibold text-xl text-blue-600">
            Blog Author
          </label>
          <br />

          <select value={author} onChange={(e) => setAuthor(e.target.value)} className="border-2 border-gray-400" required>
            <option value="">-- Select an Author -- </option>
            <option value="john">John</option>
            <option value="mary">Mary</option>
            <option value="batman">Batman</option>
          </select>
          <br />
          <br />

          <button type="submit" className="bg-blue-600 text-white py-3 px-5 rounded-xl my-4 group hover:-translate-y-1">Add Blog</button>

        </form>

        <p>Title: {title}</p>
        <p>Body: {body}</p>
        <p>Author: {author}</p>


      </div>
    </>

  );
};

export default Newblog;