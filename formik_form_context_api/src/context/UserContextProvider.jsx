import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    return(
        <UserContext.Provider value={{data, setData,editingIndex,setEditingIndex}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;