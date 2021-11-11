import React , {useEffect ,useState} from 'react'
import { Card , Button } from 'react-bootstrap'
import  proicon  from '../assets/profileicon.jpg'
import { useAuth } from '../authentication/AuthProvider'
import Navbarex from '../students/Navbarex'
import '../css/stud.css'
import { db } from '../firebase'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const StudentProfile = () => {
    const { logout } = useAuth()
    const [details , setDetails] = useState('')
    const [counsellor,setCounsellor] = useState('')
    
    useEffect(() => {
       async function geuser(){
            const dat = await db.collection('users').doc(auth.X).get()
            setDetails(dat.data())
            console.log(dat.data())
            if(auth.X === 'IzdgmuwWcmcMwPZ891jRq3BZKwL2')
    {
        setCounsellor(true)
        console.log(auth.X)
    }
       }
       geuser()
    }, [])
    async function handlelogout(){
        await logout()
    }
    return (
        <div>
            <Navbarex />
           {counsellor && <Link to='/councellorportal'>portal</Link>}
            <center>
            <Card className="xyz" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ proicon } />
            <Card.Body>
            <Card.Title>{ details.username }</Card.Title>
            <Card.Text>
                Student
            </Card.Text>
            <Card.Text>
                {details.collegeid}
            </Card.Text>
            <Card.Text>
                {details.class}
            </Card.Text>
            <Button variant="primary"  onClick={ handlelogout }>Logout</Button>
            </Card.Body>
        </Card>
        </center>
        </div>
    )
}

export default StudentProfile
