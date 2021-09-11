import React , { useRef ,useState} from 'react'
import { useAuth } from './AuthProvider'
import { Form , Button ,Alert} from 'react-bootstrap'
import { Link ,useHistory } from 'react-router-dom'

const Signin = () => {
    const userRef = useRef()
    const passRef = useRef()
    const { signin } = useAuth()
    const history = useHistory()
    const { warning } =useAuth()
    const [error , setError] = useState()
    async function handlesignin()
    {
        try{
            if((passRef.current.value).trim().length!==0 && (userRef.current.value).trim().length!==0){
                await signin(userRef.current.value , passRef.current.value)
                history.push('/')
            }
            else{
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
                <input type="text" ref= { userRef } placeholder="username"/>
                <input type="password" ref= { passRef } placeholder="password"/>
                <Button className="btn btn-success" onClick= { handlesignin }>Login</Button>
            </Form>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Signin
