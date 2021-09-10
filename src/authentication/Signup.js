import React , { useRef } from 'react'
import { Button , Form } from 'react-bootstrap' 
import { useAuth } from './AuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link ,useHistory} from 'react-router-dom'


const Signup = () => {

    const userRef = useRef()
    const passRef = useRef()
    const { signup } = useAuth()
    const { currentUser } = useAuth()
    const history = useHistory()


    async function handlesignup(){
        try{
            await signup(userRef.current.value , passRef.current.value)
            history.push("/")
        }
        catch(e){
            console.log(e.code)
        }
    }

    return (
        <div>
            { currentUser && currentUser.email }
            <Form>
                <input type="text" ref={userRef}  placeholder="username"/><br/>
                <input type="password" ref={passRef}  placeholder="password"/><br/>
                <Button className="btn btn-primary w-100" onClick = { handlesignup }>Signup</Button>
            </Form>
            <Link  to="/signin">Signin</Link>
        </div>
    )
}

export default Signup
