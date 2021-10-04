import React from 'react'
import { Card , Button } from 'react-bootstrap'
import  proicon  from '../assets/profileicon.jpg'
import { useAuth } from '../authentication/AuthProvider'
import Navbarex from '../students/Navbarex'
import '../css/stud.css'

const StudentProfile = () => {
    const { currentUser , logout } = useAuth()
    async function handlelogout(){
        await logout()
    }
    return (
        <div>
            <Navbarex />
            <center>
            <Card className="xyz" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ proicon } />
            <Card.Body>
            <Card.Title>{ currentUser && currentUser.email }</Card.Title>
            <Card.Text>
                Student
            </Card.Text>
            <Button variant="primary"  onClick={ handlelogout }>Logout</Button>
            </Card.Body>
        </Card>
        </center>
        </div>
    )
}

export default StudentProfile
