import React , {useEffect , useState}  from 'react'
import career from '../assets/a.jpg'
import Navbarex from './Navbarex'
import {  db } from '../firebase'

const Careerguidance = () => {
  const [faculty , setFaculty] = useState('')
  useEffect(() => {
    async function fetfaculty(){
      await db.collection("faculty").onSnapshot((snapshot) =>{
        setFaculty(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      })
      
    }
    console.log(faculty)
    fetfaculty()
  }, [])
    return (
        <div>
          <Navbarex />
            <div class="container-fluid">

<div class="row d-flex flex-row align-items-center">
  <div class="col-sm-6">
    <div class="card-deck">
      <div class="card-body">
        <img class="card-img" src={career} alt="Card im cap" />
      </div>
    </div>
    </div>

    <div class="col-sm-5">
        <div class="card-deck bg-light">
          <div class="card-body">
            <h2 class="card-title text-center">Career Guidance</h2>
            <h6 className="text-center">(Chat Option Will be Added Shortly)</h6>
                <h5 class="p-2 bg-primary text-white">List of Faculty</h5>
            
                <table class="table table-borderless text-center">
                    <thead>
                      
                      <tr>
                        <th>Name</th>
                        <th>Branch</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {faculty && faculty.map(fac=>(
                        <tr>
                        <td>{fac.data.username}</td>
                        <td>{fac.data.branch}</td>
                        <td><button class="btn btn-primary"  >{fac.data.mobile}</button></td>
                      </tr>
                      ))}
                      
                    </tbody>
                  </table>
    


  </div>
  </div>

  </div>
  </div>
  </div>
        </div>
    )
}

export default Careerguidance
