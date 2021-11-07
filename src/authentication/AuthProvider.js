import React , { useState , useContext  ,useEffect} from 'react'
import { auth ,db } from '../firebase'
import  { useHistory } from 'react-router-dom'


const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [warning , setWarning] = useState('')
    const [currentUser , setCurrentUser] = useState('')
    const [currentUserID , setCurrentUserID] = useState('')    
    const history = useHistory()

   
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
      }, [])
    
      

    async function signup(username,password,clgid ,classroom){
        try{
            auth.createUserWithEmailAndPassword(username,password).then(auth => {
              if(auth.user)
              {
                setCurrentUserID(auth.user.id) 
                db.collection('users').doc(auth.user.uid).set({'email':username , 'collegeid' : clgid , 'class' : classroom})
                 history.push('/')
            }
            }).catch(e => {
              console.log(e)
            })
           }
           catch(e){
             console.log(e)
           }
    }


    async function signin(username , password){
           
            try{
                await  auth.signInWithEmailAndPassword(username,password)
                if(auth){
                   // setCurrentUserID(auth.user.uid)
                    history.push('/')
                }
            }
            catch(e){
                setWarning(e)
            }
        }

        async function forgot(username){
            try{
                await auth.sendPasswordResetEmail(username)
                if(auth)
                    history.push('/signin')
            }
            catch(e){
                setWarning(e)
            }
        }

 async function logout(){
        await auth.signOut()
        history.push('/signin')
    }

    const value = { 
        signup ,
        logout ,
        signin ,
        warning , 
        currentUser,
        currentUserID,
        forgot
    }

   

    

    return (
        <AuthContext.Provider value={ value }>
                { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
