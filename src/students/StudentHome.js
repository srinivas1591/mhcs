import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../css/stud.css'
const StudentHome = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  
  <div className="navbar-brand mb-0 h1">
    <Link className="nav-link" to="/student">MHCG</Link>
 </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="#">Quiz</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="#">Feedback</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="#">Profile</Link>
    </li>
  </ul>
  </div>
</nav>

<div className="container">

  <div className="row d-flex flex-row align-items-center bg-light text-dark">
    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src="../assets/counselling.jpg" alt="some thing"/>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body text-center">
          <h5 className="card-title">Get Counselling from Pyschology counsellor</h5>
          <p className="card-text">If you are feeling low and need 
            to share something we are here to help you</p>
          <Link to="#" className="btn btn-primary">Counselling</Link>
        </div>
      </div>
    </div>
  </div>

  <div className="row d-flex flex-row align-items-center">
    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body text-center ">
          <h5 className="card-title">Get Career Guidence From your Faculty</h5>
          <p className="card-text">Confused what to do ? where to go?
            Get guided by a faculty</p>
          <Link to="#" className="btn btn-primary">Career Guidence</Link>
        </div>
      </div>
    </div>


    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src="assets/career.jpg" alt="some thing"/>
        </div>
      </div>
    </div>

  </div>


  <div className="row d-flex flex-row align-items-center bg-light text-dark">
    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src="assets/saf.jpg" alt="some thing"/>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body text-center">
          <h5 className="card-title ">Suggest your if he/she feels low</h5>
          <p className="card-text">Do you feel your friend is behaving strange.
            If you think you cannot help. Ping us here</p>
          <Link to="#" className="btn btn-primary">Suggest a Friend</Link>
        </div>
      </div>
    </div>
  </div>

</div>
        </div>
    )
}

export default StudentHome