import React , { useRef ,useState} from 'react'
import { Button , Form ,Alert} from 'react-bootstrap' 
import { useAuth } from './AuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from 'react-router-dom'

const Signup = () => {

    const userRef = useRef()
    const passRef = useRef()
    const { signup ,warning} = useAuth()
    const [error , setError] = useState()
    async function handlesignup(){
        try{
            if((passRef.current.value).trim().length!==0 && (userRef.current.value).trim().length!==0){
                await signup(userRef.current.value , passRef.current.value)
            }
            else
            {
                setError("username and password can't be empty")
            }
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            {warning && <Alert variant="danger">{(warning.code).slice(5,)}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
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
