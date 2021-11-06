import React from 'react'
import quiz from '../assets/quiz.jpg'
import Navbarex from './Navbarex'
const Quiz = () => {
    return (
        <div>
           <Navbarex/>
            <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={quiz} alt="Card imge cap"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card-deck bg-light">
      <div class="card-body">
        <h2 class="card-title text-center">Quiz</h2>
        <form action="">
        <div class="form-group">
            <label for="comment">Rate your day week</label>
            <div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"/>1
                    </label>
                    </div>

                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"/>2
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"/>3
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"/>4
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"/>5
                    </label>
                    </div>
                 </div>
                 </div>

                 <div class="form-group">
                    <label for="comment">Have all things went according to how you planned?</label>
                    <textarea class="form-control" rows="2" id="comment"></textarea>
                  </div>

                  <div class="form-group">
                    <label for="comment">All ok with family and friends</label>
                    <textarea class="form-control" rows="2" id="comment"></textarea>
                  </div>
                

                 
                  <div class="form-group">
                    <label for="comment">How well were you motivated</label>
                    <div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"/>1
                            </label>
                            </div>

                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"/>2
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"/>3
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"/>4
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"/>5
                            </label>
                            </div>
                         </div>
                         </div>


                         <div class="form-group">
                            <label for="comment">Are you feeling low?</label>
                            <div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="feel"/>No
                                    </label>
                                    </div>
    
                                 <div class="form-check-inline">
                                    <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="feel"/>Yes
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
        </div>
    )
}

export default Quiz
