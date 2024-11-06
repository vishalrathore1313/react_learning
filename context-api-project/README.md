
Context API 

The React Context API is a built-in feature that allows developers to share data between components in a React application without manually passing props down through every level of the component tree. This can be useful for managing complex state and keeping track of changes.



Make a context folder in Src.
then make UserContext.js file in context folder.
In UserContext.js

import React from "react";

const UserContext= React.createContext();

export default UserContext;

//This UserContext is a provider.

Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.
***********************************************************************************

Now we will make provider so we will create UserContextProvider.jsx file in context folder.

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=()=>{

}

export default UserContextProvider;



import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
       const [user,setUser]=useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


***********************************************************************************
