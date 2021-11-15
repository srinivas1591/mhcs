import React , { useRef ,useState } from 'react'
import {Button ,Form} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/auth.css'
import AuthStyle from '../authentication/AuthStyle'
import { auth ,db } from '../firebase'
import { Alert  } from 'react-bootstrap' 
import '../css/auth.css'

const SignUp = () => {

 const emailRef = useRef() 
 const userRef = useRef() 
 const passwordRef = useRef() 
 const branchRef = useRef() 
 const mobileRef = useRef() 
 
 const [warning, setWarning ]=  useState('')
 const [success, setSuccess] = useState('')

 async function SignUp(e){
    e.preventDefault()
    if((emailRef.current.value).length===0 || (userRef.current.value).length===0 || (passwordRef.current.value).length===0 || (branchRef.current.value).length===0 || (mobileRef.current.value).length===0)
    {
        setWarning('All fieds are important')
    }
    else{
        await auth.createUserWithEmailAndPassword(emailRef.current.value , passwordRef.current.value).then(auth =>{
            db.collection('faculty').doc(auth.user.uid).set({ 'username' : userRef.current.value , 'email' : emailRef.current.value , 'branch' : branchRef.current.value , 'mobile' : mobileRef.current.value }).then(au=>{
            setSuccess("signup success")
            setWarning('')
            console.log(auth.user.uid)
           }).catch(e =>{
               setWarning(e.code)
           })
           
            
        }).catch(error =>{
            setWarning(error.code)
        })
        
    }
 }

    return (
        <div>
            <font className="title">MHCS AND CG</font>

        <center>
            { success &&  <Alert variant="success">{success}</Alert> }
            { warning &&  <Alert variant="danger">{warning.slice(5,)}</Alert> }
        </center>
            <div className="mainclass">
                <AuthStyle />
                <div className="sub2">
                        <center>  
                        <Form>
                            <font className="alink">Faculty SignUp</font><br/>
                            <input type="email" ref={ emailRef }  className='form-control' placeholder="email"/>
                            <input type="text" ref= {userRef}  className="form-control" placeholder="username"/>
                            <input type="password" ref={passwordRef} className='form-control' placeholder="password"/>
                            <select className="form-control" id="select" ref={branchRef}>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>ME</option>
                                <option>CE</option>
                                <option>CHEM</option>
                                <option>MMEs</option>
                            </select>
                            <input type="number" className="form-control" ref={mobileRef}  placeholder="mobile number"/>
                            <Button className="btn btn-success" onClick={SignUp} >Signup</Button>
                        </Form>
                        </center>
                </div>
            </div>
            <br/>
            <center><font className="copyrights">&copy; We4 Solutions</font></center>
        </div>
    )
}

export default SignUp
