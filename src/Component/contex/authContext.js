import { createContext } from "react";

export const context = createContext() 

export function Authprovider ({children}) {

    const user = {
        login: true,
    };

    return (
        <context.Provider value= {{user}}>
            {children}
        </context.Provider>
    )
 


   

}