import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../css/stud.css'
import { useAuth } from '../authentication/AuthProvider'


const Navbar = () => {
    const { logout } = useAuth()
  function handlelogout()
  {
      logout()
  }
    return (
        <div>
             <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  
  <div className="navbar-brand mb-0 h1">
    <Link className="nav-link" to="/"><font className="text-white">MHCS & CG</font></Link>
 </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="/quiz">Quiz</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/feedback">Feedback</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/profile">Profile</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="" onClick={handlelogout}>Logout</Link>
    </li>
  </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
