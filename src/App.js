import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("http://localhost:3000/products")
        const json = await res.json()
        console.log('this is json', json)
      } catch (error) {
        console.log(error)
      }
    };
    makeAPICall()
  }, [])
  
  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
