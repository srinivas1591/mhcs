import React , {useEffect , useState} from 'react'
import { db } from '../firebase'
import { Card } from 'react-bootstrap'
import  proicon  from '../assets/profileicon.jpg'
import { Link  } from 'react-router-dom'
import { useAuth } from '../authentication/AuthProvider'

const Stuprof = ({userId}) => {
    const [details , setDetails] = useState('')
    useEffect(() => {
       async function geuser(){
            const dat = await db.collection('users').doc(userId).get()
            setDetails(dat.data())
       }
       geuser()
    }, [userId])
    const { logout } = useAuth()
    function handlelogout()
    {
        logout()
    }
    return (
        <div>
            
<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  
  <div className="navbar-brand mb-0 h1">
    <Link className="nav-link" to="/councellorportal"><font className="text-white">MHCG</font></Link>
 </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="" onClick={handlelogout}>Logout</Link>
    </li>
  </ul>
  </div>
</nav>
             <center>
            <Card className="xyz" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ proicon } />
            <Card.Body>
            <Card.Title>{ details.email }</Card.Title>
            <Card.Text>
                Student
            </Card.Text>
            <Card.Text>
                {details.collegeid}
            </Card.Text>
            <Card.Text>
                {details.class}
            </Card.Text>
            </Card.Body>
        </Card>
        </center>
        </div>
    )
}

export default Stuprof
