import React , { useRef , useState } from 'react'
import quiz from '../assets/quiz.jpg'
import Navbarex from './Navbarex'
import {Alert} from 'react-bootstrap'
import {auth , db} from '../firebase'

const Quiz = () => {
   const [error , setError] = useState('')
   const [success , setSuccess] = useState('')
   const thingsRef = useRef()
   const famRef = useRef()
   async function handleSubmit(e){
      e.preventDefault()
      const rate = document.f.day.value
      const motivate = document.f.mot.value
      const feel = document.f.feel.value
      if((thingsRef.current.value).length===0 || (famRef.current.value).length===0 || rate.length===0 || motivate.length===0 || feel.length===0)
      {
         setError("All fields Mandatory!! please fill")
      }
      else{
         const authId=auth.X
         await db.collection('quiz').doc().set({'user':authId,'rating':rate,'things':thingsRef.current.value,'fam':famRef.current.value,'motivate':motivate , 'feeling':feel})
         .then(auth=>{
            setSuccess("Successfully Submitted!!!")
         }).catch(e=>{
            setError("sorry for inconvinience")
         })
      }
   }
    return (
        <div>
           <Navbarex/>
          <center>
             {error && <Alert variant="danger">{error}</Alert> }
             {success && <Alert variant="success">{success}</Alert> }
         </center>
            <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-5">
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
        <form name="f">
        <div class="form-group">
            <label for="comment">Rate your day week</label>
            <div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day" value='1'/>1
                    </label>
                    </div>

                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day" value='2'/>2
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day" value='3'/>3
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"  value='4'/>4
                    </label>
                    </div>
                    
                 <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="day"  value='5'/>5
                    </label>
                    </div>
                 </div>
                 </div>

                 <div class="form-group">
                    <label for="comment">Have all things went according to how you planned?</label>
                    <textarea class="form-control" rows="2" ref={thingsRef} id="comment"></textarea>
                  </div>

                  <div class="form-group">
                    <label for="comment">All ok with family and friends</label>
                    <textarea class="form-control" rows="2" ref={famRef} id="comment"></textarea>
                  </div>
                

                 
                  <div class="form-group">
                    <label for="comment">How well were you motivated</label>
                    <div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot" value='1'/>1
                            </label>
                            </div>

                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot"  value='2'/>2
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot" value='3'/>3
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot" value='4'/>4
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="mot" value='5'/>5
                            </label>
                            </div>
                         </div>
                         </div>


                         <div class="form-group">
                            <label for="comment">Are you feeling low?</label>
                            <div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="feel" value='no'/>No
                                    </label>
                                    </div>
    
                                 <div class="form-check-inline">
                                    <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="feel" value='yes'/>Yes
                                    </label>
                                    </div>
                                 </div>
                                 </div>




               
                                 <button type="button" onClick={handleSubmit} class="btn btn-primary m-3 float-right">Submit</button>   
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
