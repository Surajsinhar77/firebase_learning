import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [userInfo, setUserInfo]  = useState(()=>{
        localStorage.getItem("userinfo") || null 
    });

    function userLogin(userinfo){
        localStorage.setItem("email", userinfo.email);
        localStorage.setItem("accessToken", userinfo.accessToken);
        localStorage.setItem("uid", userinfo.uid);
        setUserInfo(userinfo);
    }

    function userLogout(){
        localStorage.removeItem("email");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("uid");
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
