import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <nav>
        <h2>Our Blog</h2>
        <div className="flex gap-7">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/newblog">New Blog</NavLink>
        </div>
    </nav>
    </>
  )
}
