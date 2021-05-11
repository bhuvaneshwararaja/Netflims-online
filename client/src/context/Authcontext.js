import React ,{useState} from "react"
export const AuthContext = React.createContext();
const auth = {
    status:false,
    userid:""
}
const Auth = ({children}) => {
    const [islogged,setislogged] = useState(auth)
    return (
        <>
        <AuthContext.Provider value={[islogged,setislogged]}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default Auth;