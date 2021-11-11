import React , {useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import {  db } from '../firebase'

import { useAuth } from '../authentication/AuthProvider'

const Councellorportal = () => {
  const [fet,setFet] = useState('')
  const [quiz,setQuiz] = useState('')
  const [coun,setCoun] = useState('')
  const [feed,setFeed] = useState('')
  useEffect(() => {
    async function getsuggestions(){
      const data=await db.collection("suggestfirend").get()
      setFet(data.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    }
    getsuggestions()

    async function getquiz(){
      const data=await db.collection("quiz").get()
      setQuiz(data.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    }
    getquiz()

    async function getcoun(){
      const data=await db.collection("councelling").get()
      setCoun(data.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    }
    getcoun()

    async function getFeedback(){
      const data=await db.collection("feedback").get()
      setFeed(data.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    }
    getFeedback()
  }, [])

  const { logout } = useAuth()
  function handlelogout()
  {
      logout()
  }

    return (
        <div>

<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  
  <div className="navbar-brand mb-0 h1">
    <Link className="nav-link" to="/councellorportal"><font className="text-white">MHCG</font></Link>
 </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="" onClick={handlelogout}>Logout</Link>
    </li>
  </ul>
  </div>
</nav>

            {/* nav */}
           <div class="container">
                
                <br/>
               
                
                <ul class="nav nav-pills nav-justified" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#chat">Feedback</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#messages">Counselling</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#saf">Suggestions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#quiz">Quiz</a>
                </li>
                </ul>
            
                    {/* Chats Tab */}  
                <div class="tab-content bg-light">
                <div id="chat" class="container tab-pane active"><br/>
                        
                    {feed && feed.map(dis => (
                    <div class="container d-flex flex-column ">
                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                                <Link to={`/studentprofile/${dis.data.userId}`}>{dis.data.user}</Link></h5>
                                <p className="text-muted">What help have you got?</p>
                                <p className="">{dis.data.service}</p>
                                <p className="text-muted">How much do you rate for the service?</p>
                                <p className="">{dis.data.rating}</p>
                                <p className="text-muted">Say something how it helped you?</p>
                                <p className="">{dis.data.suggestion}</p>
                              <Link to={`/chat/${dis.data.userId}`} class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>
                    </div>))}                  
                </div>


                {/* Messages Tab*/}
                <div id="messages" class="container tab-pane fade"><br/>
                {coun && coun.map(dis => (
                    <div class="container d-flex flex-column ">
                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                                <Link to={`/studentprofile/${dis.data.userId}`}>{dis.data.user}</Link></h5>
                              <p class="card-text  ml-5">{dis.data.problem}</p>
                              <Link to={`/chat/${dis.data.userId}`} class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>
                    </div>))}
                </div>



            {/* Suggestions tab */}
                <div id="saf" class="container tab-pane fade"><br/>
                {fet && fet.map(dis => (
                  <div class="container d-flex flex-column ">
                  <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                      <div class="card-body">
                        <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                          <Link to={`/studentprofile/${dis.data.suggestId}`}>{dis.data.suggestedby}</Link> </h5>
                          <div class="row text-center">
                        <p class="col-sm-4 font-weight-bold">Friend Name : {dis.data.name}</p> <p class="col-sm-4 font-weight-bold">{dis.data.id}</p>
                        
                      </div>
                          <p class="text-muted">Why are they suggesting him/her?</p>
                          <p class="">{dis.data.reason}</p>
                          <p class="text-muted">Did they share thingd?</p>
                          <p class="">{dis.data.sharing}</p>
                        <Link to="" class="btn btn-primary float-right ">Chat</Link>
                      </div>
                  </div>
                  </div>
                ))}
                </div>




                {/* Quiz tab */}
                <div id="quiz" class="container tab-pane fade"><br/>
                {quiz && quiz.map(dis => (
                  <div class="container d-flex flex-column ">
                  <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                      <div class="card-body">
                        <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                          <Link to={`/studentprofile/${dis.data.user}`}>{dis.data.userId}</Link> </h5>
                          <div class="row text-center">
                        
                      </div>
                          <p class="text-muted">Rating of his/her week? {dis.data.rating}</p>
                          <p class="text-muted">Have all things went according to how you planned?</p>
                          <p class="">{dis.data.things}</p>
                          <p class="text-muted">All ok with family and friends?</p>
                          <p class="">{dis.data.fam}</p>
                          <p class="text-muted">How well were you motivated? {dis.data.motivate}</p>
                          <p class="text-muted">Are you feeling low?? {dis.data.feeling}</p>
                          
                      </div>
                  </div>
                  </div>
                ))}
                        
                </div>
           
</div></div></div>

        
    )
}

export default Councellorportal
