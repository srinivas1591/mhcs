import React , { useRef ,useState} from 'react'
import { useAuth } from './AuthProvider'
import { Form , Button ,Alert} from 'react-bootstrap'
import { Link  } from 'react-router-dom'

const Forgot = () => {
    const userRef = useRef()
    const { warning , forgot} =useAuth()
    const [error , setError] = useState()
    
    async function handleforgot()
    {
        try{
            if((userRef.current.value).trim().length!==0){
                await forgot(userRef.current.value)
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
                <Button className="btn btn-success" onClick= { handleforgot }>Send Email</Button>
            </Form>
            <Link to="/signin">Login</Link>
        </div>
    )
}

export default Forgot
