import React, { useState, useEffect } from "react";
import Review from '../components/Review'

const ProductCard = ({ product }) => {
     return (
       <>
         <div className="card-container">
           <div className="img-container">
             <img className="product-img" src={ product.img } alt="" />
             <h1 className="product-name">{ product.name }</h1>
             <p className="price">cost: ${ product.price }</p>
             <div className="backside-container">
                 {product.reviews.map((reviews) => (
                    <p className="reviews">{reviews.title}</p>
                    ))}          
             </div>
           </div>
           <button className="create-review">Write Review</button>
         </div>
       </>
     );
   }

export default ProductCard
