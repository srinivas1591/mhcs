import React from 'react'
import fd from '../assets/fd.jpg'
import { Link } from 'react-router-dom'
import Navbarex from './Navbarex'
const Feedback = () => {
    return (
        <div>
           <Navbarex/>
             <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={fd} alt="Card im cap"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card-deck bg-light">
      <div class="card-body">
        <h2 class="card-title text-center">Feedback</h2>
        <form action="">
            <div class="form-group">
                <label for="comment">What help have you got?</label>
                <div>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="service"/>Councelling
                        </label>
                        </div>

                     <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="service"/>Career guidance
                        </label>
                        </div>
                        
                     <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="service"/>Suggest a friend
                        </label>
                        </div>
                     </div>
                     </div>

                <div class="form-group">
                    <label for="comment">Say something how it helped you?</label>
                    <textarea class="form-control" rows="2" id="comment"></textarea>
                  </div>
                 

                  <div class="form-group">
                    <label for="comment">How much do you rate for the service?</label>
                    <div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate"/>1
                            </label>
                            </div>

                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate"/>2
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate"/>3
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate"/>4
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate"/>5
                            </label>
                            </div>
                         </div>
                         </div>

                         

                                
       
                                         <button type="button" class="btn btn-primary m-3 float-right">Submit</button>   
                                         <button type="reset" class="btn btn-warning m-3 float-right">Reset</button> 
    </form>

    </div>
</div>
</div>
</div>
</div>
<Link to='/'>Quiz</Link>
        </div>
        
    )
}

export default Feedback
