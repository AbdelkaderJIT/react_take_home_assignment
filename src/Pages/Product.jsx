import React, { useEffect } from 'react'

const Product = () => {
    const[product,setProduct] = React.useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>setProduct(json))
        .catch(err => console.log(err))
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Product
