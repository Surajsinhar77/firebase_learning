import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [userInfo, setUserInfo]  = useState(()=>{
        localStorage.getItem("userinfo") || null 
    });

    function userLogin(userinfo){
        localStorage.setItem("userinfo", userinfo);
        setUserInfo({"userinfo":userInfo}); 
    }

    function userLogout(){
        localStorage.removeItem("userinfo");
        setUserInfo(null);
    }
    return (
        <AuthContext.Provider value={
            {
                userInfo,
                userLogin,
                userLogout,
            }
        }>
            {children}
        </AuthContext.Provider>
    )
} 

export const authUser = () => useContext(AuthContext);
