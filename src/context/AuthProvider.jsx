import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/Localstorage";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        setLocalStorage()
      const {employees,admins} = getLocalStorage()
      setUserData({employees,admins})
    }, [])
    
    
    return (
        <div>

        <AuthContext.Provider value={userData}>
             {children}
        </AuthContext.Provider>
               
        
                
        </div>
    )
}

export default AuthProvider