import React , {useRef , useState} from 'react'
import counselling from '../assets/counsellingpage.jpg'
import Navbarex from './Navbarex'
import {auth,db} from '../firebase'
import { Alert } from 'react-bootstrap'

const Councelling = () => {
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const problemRef = useRef()
  async function handlesubmit(){
    if((problemRef.current.value).length===0){
      setError("please mention your problem")
    }
    else{
      const authId = auth.X
      await db.collection('councelling').doc().set({'user': authId, 'problem' : problemRef.current.value}).then(auth =>{
        setSuccess("Submitted Successfully!!! please wait while we reach you")
        setError('')
      }).catch(e=>{
        setError("Sorry Soomething went wrong")
      })
    }
  }

    return (
        <div>
          <Navbarex/>

          <center>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
          </center>


             <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={counselling} alt="Card im cap" />
      </div>
    </div>
  </div>

  <div class="col-sm-5">
    <div class="card-deck bg-light">
      <div class="card-body">
        <h2 class="card-title text-center">Counselling</h2>
        <form action="">
        <div class="form-group">
            <label for="comment">What is Bothering you?</label>
            <textarea class="form-control" ref={problemRef} rows="5" id="comment"></textarea>
          </div>
          <button type="button" onClick={handlesubmit} class="btn btn-primary">Submit</button>      
      
    </form>
    OR
    <div><button type="button"  class="btn btn-primary">Chat</button></div>
    </div>
</div>
  </div>
</div>
</div>
        </div>
    )
}

export default Councelling
