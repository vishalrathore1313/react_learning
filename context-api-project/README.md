
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


Now we will import UserContextProvider in App.js  

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
     <UserContextProvider>
      
     </UserContextProvider>    // It will work as provider and all the components btw it can access varibles.
  );
}

export default App;


*************************


Now we will create two components in Login.jsx and Profile.jsx in components folder


In Login.jsx

import React,{useState,useContext} from 'react'  //import userContext hook
import UserContext from '../context/UserContext'  //import UserContext

function Login() {
  return (
    <div>
      
    </div>
  )
}

export default Login

***********************************************************************************



import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(UserContext)   // use useContext here....use setUser from UserContextProvider.jsx

const handleSubmit=(e)=>{
       e.preventDefault();
       setUser({username,password});   // we use setUser send data in Context API 
  }

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;


***********************************************************************************

How we get variable data

import React,{useContext}from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user}=useContext(UserContext);
   
    if(!user) return <div>Please Login</div>

    return <div>welcome {user.username}</div>
}

export default Profile


***********************************************************************************



There is one more syntext of useing context API

followed in next project.
