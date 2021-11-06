import React from 'react'
import counselling from '../assets/counsellingpage.jpg'
import Navbarex from './Navbarex'
const councelling = () => {
    return (
        <div>
          <Navbarex/>
             <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={counselling} alt="Card im cap" />
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card-deck bg-light">
      <div class="card-body">
        <h2 class="card-title text-center">Counselling</h2>
        <form action="">
        <div class="form-group">
            <label for="comment">What is Bothering you?</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          <button type="button" class="btn btn-primary">Submit</button>      
      
    </form>
    OR
    <div><button type="button" class="btn btn-primary">Chat</button></div>
    </div>
</div>
  </div>
</div>
</div>
        </div>
    )
}

export default councelling
