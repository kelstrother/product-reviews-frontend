import React, { useState, useEffect } from "react";
import Review from '../components/Review'

const ProductCard = ({ product }) => {
     return (
       <>
         <div className="card-container">
           <div className="img-container">
             <img className="product-img" src={ product.img } alt="" />
             <h1 className="product-name">{product.name}</h1>
             <h4>{ product.price }</h4>
             <div className="backside-container">
                 {product.reviews.map((reviews) => (
                    <h1>{reviews.title}</h1>
                    ))}          
             </div>
           </div>
         </div>
       </>
     );
   }

export default ProductCard
