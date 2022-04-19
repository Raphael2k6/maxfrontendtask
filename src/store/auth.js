import React, {useState} from "react";
const isLoggedIn = false
const AuthContext = React.createContext({
    isLoggedIn,
    login: () => {},
});

export const AuthContextProvider = (props) => {
    const[login, setLogin] = useState(isLoggedIn)

    const loginHandler = async () => {
       setLogin(!isLoggedIn);    
    }

    const contextValue = {
        isLoggedIn: login,
        login: loginHandler,

    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;