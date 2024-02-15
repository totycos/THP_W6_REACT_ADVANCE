import { useState, createContext } from 'react';
import auth from "../../utils/auth";

const { checkAuth } = auth();

// Create the context
const AuthContext = createContext();

// Set the provider
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(checkAuth())
    const updateAuth = () => {
        setAuth(checkAuth())
    }

    return (
        <AuthContext.Provider value={{ auth, updateAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }