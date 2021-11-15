import React , { useRef ,useState } from 'react'
import {Button ,Form} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/auth.css'
import AuthStyle from '../authentication/AuthStyle'
import { auth  } from '../firebase'
import { Alert  } from 'react-bootstrap' 

const FacultySignIn = () => {

 const emailRef = useRef() 
 const passwordRef = useRef() 
 
 const [error, setError ]=  useState('')
 const [warning, setWarning ]=  useState('')
 const [success, setSuccess] = useState('')

 async function Signin(e){
    e.preventDefault()
    if((emailRef.current.value).length===0 || (passwordRef.current.value).length===0 )
    {
        setWarning('All fieds are important')
        setError('')
    }
    else{
        await auth.signInWithEmailAndPassword(emailRef.current.value , passwordRef.current.value).then(auth =>{
            setSuccess("signin success")
            setWarning('')
            setError('')
            console.log(auth.user.uid)
           }).catch(error =>{
            setError(error.code)
            setWarning('')
        })
        
    }
 }

    return (
        <div>
            <font className="title">MHCS AND CG</font>

        <center>
            { success &&  <Alert variant="success">{success}</Alert> }
            { error &&  <Alert variant="danger">{error.slice(5,)}</Alert> }
            { warning &&  <Alert variant="danger">{warning}</Alert> }
        </center>
            <div className="mainclass">
                <AuthStyle />
                <div className="sub2">
                        <center>  
                        <Form>
                            <font className="alink">Faculty Signin</font><br/>
                            <input type="email" ref={ emailRef }  className='form-control' placeholder="email"/>
                            <input type="password" ref={passwordRef} className='form-control' placeholder="password"/>
                            <Button className="btn btn-success" onClick={Signin} >Signin</Button>
                        </Form>
                        </center>
                </div>
            </div>
            <br/>
            <center><font className="copyrights">&copy; We4 Solutions</font></center>
        </div>
    )
}

export default FacultySignIn
