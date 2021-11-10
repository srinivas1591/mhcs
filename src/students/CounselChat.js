import React , {useEffect , useState ,useRef} from 'react'
import { auth,db } from '../firebase'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { animateScroll } from "react-scroll";
import  back  from '../assets/back.png'
import firebase from 'firebase/app';
import 'firebase/firestore';

const CounselChat = () => { 
    const [error , setError] = useState('')
    const [messages , setMessages] = useState('')
    const messageRef = useRef()
    useEffect(() => {
        const scrollToBottom = () => {
            animateScroll.scrollToBottom({
              containerId: "mydiv",
              duration: 100,
              delay: 100,
            });
          };
          scrollToBottom()
          db
          .collection(auth.X)
          .orderBy("createdAt")
          .onSnapshot((snapshot) => {
            setMessages(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            );
            scrollToBottom();
          });
    }, [])
    async function handlemessage(){
        if((messageRef.current.value).length===0)
        {
            document.getElementById('inp').focus()
        }
        else{
            const authId=auth.X
            const messageplate = {
                'sender' : authId ,
                'createdAt' : firebase.firestore.FieldValue.serverTimestamp(),
                'message' : messageRef.current.value
            }
            await db.collection(authId).doc().set({ messageplate }).then(auth =>{
                console.log('sent successfully')
                document.getElementById('inp').value=''
            }).catch(e =>{
                setError(e)
            })
        }
    }
    return (
        <div>
            <center>
                {error && <Alert variant="danger">{error}</Alert>}
            </center>
            <div class="container" id="container">
            <div class="bg-light ">
                <div class="w-100 bg-primary text-light text-bold p-3 font-weight-bold">
                    <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle" width="30px" height="30px"/>
                      &nbsp;Counsellor
                </div>
                <Link to='/'><img src= {back} alt="it helps" style={{width:25}}/></Link>

                    <div id="mydiv" class="b-0 overflow-auto" style={{height: "33em"}}>
                        {messages && messages.map(dis => (
                            <div class="col-sm-5 mt-3 d-flex justify-content-start"  id="councellor">
                            <img src="https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png" alt="something" class="rounded-circle" width="30px" height="30px"/>
                            <p class="col-sm-auto p-2 shadow-sm"  style={{backgroundColor: "rgb(255, 255, 255)", borderRadius: "0px 10px 10px 10px"}}>
                                {dis.data.message}
                            </p>
                        </div>
                        ))}
                    </div>
               

                    <div class=" container input-group sticky-bottom w-auto" >
                        <input type="text" class="form-control p-4" ref={messageRef} placeholder="Search" id="inp" />
                        <div class="input-group-append">
                          <button class="btn btn-primary " type="submit" onClick={handlemessage}>
                              <img src="https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_1280.png" alt="something" width="30px" height="30px"/>
                          </button>  
                         </div>
                      </div>


            </div>
            </div>
        
        
            
        </div>
    )
}

export default CounselChat