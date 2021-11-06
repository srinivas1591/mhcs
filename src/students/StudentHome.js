import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../css/stud.css'
import counselling from '../assets/counselling.jpg';
import career from '../assets/career.jpg'
import saf from '../assets/saf.jpg'
//import { useAuth } from '../authentication/AuthProvider'
import Navbarex from '../students/Navbarex'

const StudentHome = () => {

    return (
        <div>
            <Navbarex />

<div className="container bg-blue">

  <div className="row  d-flex flex-row align-items-center bg-light text-dark">
    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src={counselling} alt="some thing"/>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body text-center">
          <h5 className="card-title">Get Counselling from Pyschology counsellor</h5>
          <p className="card-text">If you are feeling low and need 
            to share something we are here to help you</p>
          <Link to="/councelling" className="btn btn-primary">Counselling</Link>
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
          <Link to="careerguidance" className="btn btn-primary">Career Guidence</Link>
        </div>
      </div>
    </div>


    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src={career} alt="some thing"/>
        </div>
      </div>
    </div>

  </div>


  <div className="row d-flex flex-row align-items-center bg-light text-dark">
    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body">
          <img className="card-img" src={saf} alt="some thing"/>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card-deck">
        <div className="card-body text-center">
          <h5 className="card-title ">Suggest your if he/she feels low</h5>
          <p className="card-text">Do you feel your friend is behaving strange.
            If you think you cannot help. Ping us here</p>
          <Link to="suggestfriend" className="btn btn-primary">Suggest a Friend</Link>
        </div>
      </div>
    </div>
  </div>

</div>
        </div>
    )
}

export default StudentHome
