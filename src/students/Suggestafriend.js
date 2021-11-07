import React , {useState , useRef} from 'react'
import sf from '../assets/sf.jpg'
import Navbarex from './Navbarex'
import { Alert } from 'react-bootstrap'
import { auth ,db } from '../firebase'

const Suggestafriend = () => {
  const [error,setError] = useState()
  const [success,setSuccess] = useState()
  const nameRef = useRef()
  const idRef = useRef()
  const suggestionRef = useRef()
  async function handlesubmit(){
    console.log('hi')
    const changes = document.f.changes.value
    const share = document.f.share.value
    if((nameRef.current.value).length===0 || (idRef.current.value).length===0 || (suggestionRef.current.value).length===0 || share.length===0 || changes.length===0){
      setError("All fields must be filled")
    }
    else{
      const authId=auth.X
      await db.collection("suggestfirend").doc().set({'suggestedby' : authId , 'name' : nameRef.current.value , 'id': idRef.current.value , 'reason' : suggestionRef.current.value , 'behaviour changes' : changes , 'sharing' : share})
      .then(auth =>{
        setSuccess("successfully submitted!!!!!")
        setError('')
      }).catch(e=>{
        setError("Something went wrong , try please try again!!!")
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
              <div class="col-sm-5">
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
                    <form name="f">
                        <div class="row">
                        <div class="col-sm-5 form-group">
                            <label for="usr">Name:</label>
                            <input type="text" ref={nameRef} class="form-control" id="name" />
                          </div>

                          <div class="col-sm-5 form-group">
                            <label for="usr">ID:</label>
                            <input type="text" ref={idRef} class="form-control" id="name" />
                          </div>
                   
                            </div>

                            <div class="form-group">
                                <label for="comment">Why are you suggesting her/him?</label>
                                <textarea class="form-control" ref={suggestionRef} rows="2" id="comment"></textarea>
                              </div>
                             


                                     <div class="form-group">
                                        <label for="comment">Do you see any behavioural changes?</label>
                                        <div>
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="changes" value="yes"/>Yes
                                                </label>
                                                </div>
                
                                             <div class="form-check-inline">
                                                <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="changes" value="no"/>No
                                                </label>
                                                </div>
                                             </div>
                                             </div>

                                             <div class="form-group">
                                                <label for="comment">Does he/she share everything with you?</label>
                                                <div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="share" value="yes"/>Yes
                                                        </label>
                                                        </div>
                        
                                                     <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="share" value="no"/>No
                                                        </label>
                                                        </div>
                                                     </div>
                                                     </div>
                           
                   
                                                     <button type="button" onClick={handlesubmit} class="btn btn-primary m-3 float-right">Submit</button>   
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

 