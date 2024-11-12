import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

   const [myproducts,setMyPoducts]=useState(null);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then((response)=>{
       console.log(response);
       const products=response.data;
       console.log(products);
       setMyPoducts(products);
    })
  },[])

  return (
     <div>
         {myproducts}
     </div>
  );
}

export default App;
