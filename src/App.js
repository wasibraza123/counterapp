import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [myval, setA] = useState(0)
  useEffect(()=>{
  //   setA ((prev)=>prev+1)
  // })
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response)=>{
  //   console.log(response)
  },[])

  function handleclick(){

    // setA((prev)=>prev+1)
    myval.current = myval.current+1
    setA ( myval.current);
    console.log(myval);
  }

  return(
    <>
      <center>
      <p>{myval}</p>
      <button onClick={handleclick}>click me</button>
          </center>
    
    </>
  )
}

export default App;
