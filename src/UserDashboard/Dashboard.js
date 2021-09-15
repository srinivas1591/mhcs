import React from 'react'
import { useAuth } from '../authentication/AuthProvider'
import { Button } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
const Dashboard = () => {
    const { logout } = useAuth()
    const {currentUser} = useAuth()
    async function handlesignout(){
        await logout()
    }
    return (
        <div>
            Welcome { currentUser && currentUser.email }
            <Button className="btn btn-danger" onClick={ handlesignout } >Logout</Button>
            <Link to="/student">Student</Link>
        </div>
    )
}
export default Dashboard
