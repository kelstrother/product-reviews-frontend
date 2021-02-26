import React, { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import './App.css';

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch("http://localhost:3000/products")
        const json = await res.json()
        console.log('this is json', json)
        setProduct(json)
        // console.log(product)
      } catch (error) {
        console.log(error)
      }
    };
    getProduct()
  }, [])
  
  return (
    <div className="App">
      {product.map((product) => (
        <ProductCard product={ product} />
        ))}
        {/* <Review key={ product.product_id } product={ product } /> */}
    </div>
  );
}

export default App;
