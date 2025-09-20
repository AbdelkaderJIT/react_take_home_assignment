import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'

const Shop = () => {
  const [shop, setShop] = React.useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setShop(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='shop' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {shop.map(item => (
        <ProductCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default Shop