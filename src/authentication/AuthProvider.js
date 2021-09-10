import React , { useEffect , useState , useContext  } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [currentUser , setCurrentUser] =useState()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])

    async function signup(username,password){
        try{
            await auth.createUserWithEmailAndPassword(username,password)
            
        }
        catch(e){
            console.log(e.code)
        }
    }

    async function signin(username , password){
            try{
                await auth.signInWithEmailAndPassword(username,password)
                
            }
            catch(e){
                console.log(e.message)
            }
        }

    const value = {
        currentUser , 
        signup ,
        logout ,
        signin
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
