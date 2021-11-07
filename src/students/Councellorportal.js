import React from 'react'
import {Link} from 'react-router-dom'

const Councellorportal = () => {
    return (
        <div>

            {/* nav */}
           <div class="container">
                
                <br/>
                
                <ul class="nav nav-pills nav-justified" role="tablist">
                <li class="nav-item">
                    <Link class="nav-link active" data-toggle="pill" to="/chat">Chats</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" data-toggle="pill" to="/messages">Messages</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" data-toggle="pill" to="/saf">Suggestions</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" data-toggle="pill" to="/quiz">Quiz</Link>
                </li>
                </ul>
            
                    {/* Chats Tab */}  
                <div class="tab-content bg-light">
                <div id="chat" class="container tab-pane active"><br/>
                    <div class="text-center">
                        <div>
                        <Link to=""  class="btn btn-primary text-dark shadow-sm col-sm-4 p-3 m-1" style={{border: "none", backgroundColor: "white", textAlign: "left"}}>
                            <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle" style={{width: "30px", height: "30px"}}/>
                            Student 
                          <span class="badge badge-info float-right p-2">4</span>
                        </Link>
                        </div>
                        <div>
                            <Link to="" class="btn btn-primary text-dark shadow-sm col-sm-4 p-3 m-1" style={{border: "none", backgroundColor: "white", textAlign: "left"}}>
                                <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle" style={{width: "30px", height: "30px"}}/>
                                Student 
                              <span class="badge badge-info float-right p-2">2</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="" class="btn btn-primary text-dark shadow-sm col-sm-4 p-3 m-1" style={{border: "none", backgroundColor: "white", textAlign: "left"}}>
                                <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something"  class="rounded-circle" style={{width: "30px", height: "30px"}}/>
                                Student 
                              <span class="badge badge-info float-right p-2">1</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="" class="btn btn-primary text-dark shadow-sm col-sm-4 p-3 m-1" style={{border:"none", backgroundColor: "white", textAlign: "left"}}>
                                <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle" style={{width: "30px", height: "30px"}}/>
                                Student 
                              <span class="badge badge-info float-right p-2"></span>
                            </Link>
                        </div>
                       
                      </div>                      
                </div>


                {/* Messages Tab*/}
                <div id="messages" class="container tab-pane fade"><br/>
                    <div class="container d-flex flex-column ">
                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                                Student </h5>
                              <p class="card-text text-muted">Message display here   text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to="" class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>

                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                                Student </h5>
                              <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to="" class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>

                    </div>
                </div>



            {/* Suggestions tab */}
                <div id="saf" class="container tab-pane fade"><br/>
                    
                    <div class="container d-flex flex-column ">
                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle  m-2" style={{width: "30px", height: "30px"}}/>
                                Student </h5>
                                <div class="row text-center">
                              <p class="col-sm-4 font-weight-bold">Friend Name</p> <p class="col-sm-4 font-weight-bold">Id Number</p>
                            </div>
                                <p class="text-muted">Why are you suggesting him/her?</p>
                                <p class="">Answer displays here......</p>
                                <p class="text-muted">Do you observe any behavioural changes?</p>
                                <p class="">Answer displays here......</p>
                                <p class="text-muted">Do you observe any behavioural changes?</p>
                                <p class="">Answer displays here......</p>
                              <Link to="" class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>

                        <div class="card m-2" style={{borderRadius: "10px 10px 10px 10px"}}>
                            <div class="card-body">
                              <h5 class="card-title"><img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle m-2" style={{width: "30px", height: "30px"}}/>
                                Student </h5>
                                <div class="row text-center">
                              <p class="col-sm-4 font-weight-bold">Friend Name</p> <p class="col-sm-4 font-weight-bold">Id Number</p>
                            </div>
                                <p class="text-muted">Why are you suggesting him/her?</p>
                                <p class="">Answer displays here......</p>
                                <p class="text-muted">Do you observe any behavioural changes?</p>
                                <p class="">Answer displays here......</p>
                                <p class="text-muted">Do you observe any behavioural changes?</p>
                                <p class="">Answer displays here......</p>
                              <Link to="" class="btn btn-primary float-right ">Chat</Link>
                            </div>
                        </div>

                    </div>

                </div>



                {/* Quiz tab */}
                <div id="quiz" class="container tab-pane fade"><br/>
                    <h4>Responses as per Rating</h4>
                    <div class="table-responsive-sm">          
                        <table class="table table-striped text-center">
                          <thead>
                            <tr>
                              <th>5</th>
                              <th>4</th>
                              <th>3</th>
                              <th>2</th>
                              <th>1</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><Link to="" class="link">Name</Link></td>
                              <td><Link to="" class="link">Name</Link></td>
                              <td><Link to="" class="link">Name</Link></td>
                              <td><Link to="" class="link">Name</Link></td>
                              <td><Link to="" class="link">Name</Link></td>
                            </tr>
                            <tr>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                              </tr>
                              <tr>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link text-danger">Name</Link></td>
                              </tr>

                              <tr>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link">Name</Link></td>
                                <td><Link to="" class="link text-danger">Name</Link></td>
                              </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>
                      
                </div>
                </div>
            </div>
           


        
    )
}

export default Councellorportal
