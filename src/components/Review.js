import React, { useState, useEffect} from 'react'

const Review = ({ product }) => {
   // console.log(product)
  
   return (
      <div>
         <h2 className="review-title">{product.reviews}</h2>
      </div>
   )
}

export default Review

 // const [review, setReview] = useState([])

   // useEffect(() => {
   //    const getReview = async () => {
   //       try {
   //          const res = await fetch("http://localhost:3000/reviews")
   //          const json = await res.json()
   //          console.log('this is reviews', json)
   //          setReview(json)
   //          console.log(review)
   //       } catch (error) {
   //          console.log(error)
   //       }
   //    }
   //    getReview()
   // }, [])

