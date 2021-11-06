import React from 'react'
import sf from '../assets/sf.jpg'
import Navbarex from './Navbarex'
const Suggestafriend = () => {
    return (
        <div>
             <div class="container-fluid">

            <div class="row d-flex flex-row align-items-center">
              <div class="col-sm-6">
                <div class="card-deck">
                  <div class="card-body">
                    <img class="card-img" src={sf} alt="Card im cap" />
                  </div>
                </div>
              </div>
        
              <div class="col-sm-6">
                <div class="card-deck bg-light">
                  <div class="card-body">
                    <h2 class="card-title text-center">Suggest a Friend</h2>
                    <form action="">
                        <div class="row">
                        <div class="col-sm-5 form-group">
                            <label for="usr">Name:</label>
                            <input type="text" class="form-control" id="name" />
                          </div>

                          <div class="col-sm-5 form-group">
                            <label for="usr">ID:</label>
                            <input type="text" class="form-control" id="name" />
                          </div>
                   
                            </div>

                            <div class="form-group">
                                <label for="comment">Why are you suggesting her/him?</label>
                                <textarea class="form-control" rows="2" id="comment"></textarea>
                              </div>
                             


                                     <div class="form-group">
                                        <label for="comment">Do you see any behavioural changes?</label>
                                        <div>
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="changes" />Yes
                                                </label>
                                                </div>
                
                                             <div class="form-check-inline">
                                                <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="changes" />No
                                                </label>
                                                </div>
                                             </div>
                                             </div>

                                             <div class="form-group">
                                                <label for="comment">Does he/she share everything with you?</label>
                                                <div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="changes" />Yes
                                                        </label>
                                                        </div>
                        
                                                     <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="changes" />No
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

export default Suggestafriend

 