import React , {useRef , useState ,useEffect } from 'react'
import counselling from '../assets/counsellingpage.jpg'
import Navbarex from './Navbarex'
import {auth,db} from '../firebase'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/auth.css'

const Councelling = () => {
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  
  const [link,setLink] = useState('')
  const problemRef = useRef()
  async function handlesubmit(){
    if((problemRef.current.value).length===0){
      setError("please mention your problem")
    }
    else{
      const authId = auth.X
      const useru = await db.collection('users').doc(authId).get()
      const usernames = useru.data().username
      console.log(usernames)
      await db.collection('councelling').doc().set({'user': usernames,'userId': authId,'problem' : problemRef.current.value}).then(auth =>{
        setSuccess("Submitted Successfully!!! please wait while we reach you")
        setError('')
        document.getElementById('form').reset()
      }).catch(e=>{
        setError("Sorry Soomething went wrong")
      })
    }
  }

useEffect(() => {
  async function getMeetLink(){
    const meetlink = await db.collection('meetlink').doc('meetlink').get()
    setLink(meetlink.data().link)
  }
  getMeetLink()
}, [])

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
        <form id="form">
        <div class="form-group">
            <label for="comment">What is Bothering you?</label>
            <textarea class="form-control" ref={problemRef} rows="5" id="comment"></textarea>
          </div>
          <button type="button" onClick={handlesubmit} class="btn btn-primary">Submit</button>      
      
    </form>
    OR
    <div><button type="button"  class="btn btn-primary"><Link to='/counselchat' style={{ color:"white" }}>Chat</Link></button> <button type="button"  class="btn btn-primary"><Link to={{ pathname: `${link}` }} target="_blank" style={{ color:"white" }}>Meet Now</Link></button></div>
    </div>
</div>
  </div>
</div>
</div>
        </div>
    )
}

export default Councelling
