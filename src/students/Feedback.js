import React , { useRef , useState } from 'react'
import fd from '../assets/fd.jpg'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import Navbarex from './Navbarex'
import { auth ,db } from '../firebase'
const Feedback = () => {
   const authId= auth.X
   const sayRef=useRef()
   const [error , setError] = useState('')
   const [success , setSuccess] = useState('')
   async function handlesubmit(e){
      e.preventDefault()
      const service = document.f.service.value
      const rate = document.f.rate.value
      if(rate.length===0 || service.length===0 || (sayRef.current.value).length===0 )
      {
         setError("please fill all fields")
      }
      else{
         db.collection('feedback').doc(authId).set({'service' : service , 'suggestion' :  sayRef.current.value , 'rating' : rate})
         .then(auth =>{
            setSuccess("Hurray")
            document.getElementById('form').reset()
            setError('')
         }).catch(e =>{
            setError(e) 
         })
      }
   }



    return (
        <div>
           <Navbarex/>
           <center>
            {error && <Alert variant="danger">{error}</Alert>}<br/>
            {success && <Alert variant="success">Successfully Submitted!</Alert>}<br/>
           </center>
             <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-5">
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
        <form name="f" id="form">
            <div class="form-group">
                <label for="comment">What help have you got?</label>
                <div>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="service" value="councelling" required/>Councelling
                        </label>
                        </div>

                     <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" value='career guidance' name="service"/>Career guidance
                        </label>
                        </div>
                        
                     <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" value='suggest a friend' name="service"/>Suggest a friend
                        </label>
                        </div>
                     </div>
                     </div>

                <div class="form-group">
                    <label for="comment">Say something how it helped you?</label>
                    <textarea class="form-control" rows="2" ref={sayRef} id="comment"></textarea>
                  </div>
                 

                  <div class="form-group">
                    <label for="comment">How much do you rate for the service?</label>
                    <div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="rate" value="1"  required />1
                            </label>
                            </div>

                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" value="2" name="rate" required/>2
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" value="3" name="rate"  required/>3
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" value="4" name="rate"  required/>4
                            </label>
                            </div>
                            
                         <div class="form-check-inline">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" value="5" name="rate" required/>5
                            </label>
                            </div>
                         </div>
                         </div>
                        <button type="button" class="btn btn-primary m-3 float-right" onClick={handlesubmit}>Submit</button>   
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
