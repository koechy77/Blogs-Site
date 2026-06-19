import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Newblog from './pages/Newblog';
import database from "./data/database";
import { useState, useEffect } from "react";

export default function App() {
  const [blogs, setBlogs] = useState(() => {
      const savedBlogs = localStorage.getItem("blogs");
  
      return savedBlogs
        ? JSON.parse(savedBlogs)
        : database.blogs;
    });

    useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} />
          <Route path="/newblog" element={<Newblog setBlogs={setBlogs} />} />

        </Routes>
      </div>
    </>
  )

}
