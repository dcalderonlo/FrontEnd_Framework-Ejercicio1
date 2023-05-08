import { createContext, useState } from "react";

export const AuthContext = createContext();
export const SearchContext = createContext();

const RouteContext = ({ children }) => {
    
    const [auth, setAuth] = useState(localStorage.getItem('myThreePicsToken'));
    const [query, setQuery] = useState('');

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <SearchContext.Provider value={{ query, setQuery }}>
                { children }
            </SearchContext.Provider>
        </AuthContext.Provider>
    )
}

export default RouteContext;