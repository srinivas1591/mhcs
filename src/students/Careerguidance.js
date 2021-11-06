import React  from 'react'
import career from '../assets/a.jpg'
import Navbarex from './Navbarex'
import {useHistory} from 'react-router-dom'

const Careerguidance = () => {
  const history = useHistory()
  const letsMove = () => {
    history.push('/chat')
  }
    return (
        <div>
          <Navbarex />
            <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={career} alt="Card im cap" />
      </div>
    </div>
    </div>

    <div class="col-sm-6">
        <div class="card-deck bg-light">
          <div class="card-body">
            <h2 class="card-title text-center">Career Guidance</h2>
                <h5 class="p-2 bg-primary text-white">List of Faculty</h5>
            
                <table class="table table-borderless text-center">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Branch</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>CSE</td>
                        <td><button class="btn btn-primary" onClick={letsMove}>Chat</button></td>
                      </tr>
                      <tr>
                        <td>Mary</td>
                        <td>ECE</td>
                        <td><button class="btn btn-primary" onClick={letsMove}>Chat</button></td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>MECH</td>
                        <td><button class="btn btn-primary" onClick={letsMove}>Chat</button></td>
                      </tr>
                      <tr>
                        <td>Stan</td>
                        <td>CIVIL</td>
                        <td><button class="btn btn-primary" onClick={letsMove}>Chat</button></td>
                      </tr>
                      <tr>
                        <td>Stephen</td>
                        <td>CHEM</td>
                        <td><button class="btn btn-primary" onClick={letsMove}>Chat</button></td>
                      </tr>
                    </tbody>
                  </table>
    


  </div>
  </div>

  </div>
  </div>
  </div>
        </div>
    )
}

export default Careerguidance
