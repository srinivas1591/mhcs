import React , { useEffect , useState , useContext  } from 'react'
import { auth } from '../firebase'
import  { useHistory } from 'react-router-dom'

const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [currentUser , setCurrentUser] =useState()
    const [warning , setWarning] = useState()
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])

    async function signup(username,password){
        try{
            await auth.createUserWithEmailAndPassword(username,password)
            console.log(auth)
            if(auth)
                history.push('/')
        }
        catch(e){
            setWarning(e)
        }
    }
    async function signin(username , password){
            try{
                await auth.signInWithEmailAndPassword(username,password)
                if(auth)
                    history.push('/')
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



    const value = {
        currentUser , 
        signup ,
        logout ,
        signin ,
        warning , 
        forgot
    }

    async function logout(){
        await auth.signOut()
    }

    

    return (
        <AuthContext.Provider value={ value }>
                { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
