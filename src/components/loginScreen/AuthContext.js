import React , {useState} from "react";


export const  AuthContext  =  React.createContext( null);



export function  AuthProvider (props) {
    const [auth , setAuth] = useState({});
    return (
    <AuthContext.Provider value={ {auth , setAuth}}>
        {props.childeren}
    </AuthContext.Provider>
    )
} 