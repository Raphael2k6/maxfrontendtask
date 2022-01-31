import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
});

export const AuthContextProvider = (props) => {
    const[login, setLogin] = useState(false)

    const loginHandler = () => {
       setLogin(true);    
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