import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import Pagination from '@mui/material/Pagination'

const ITEMS_PER_PAGE = 8

const Shop = () => {
  const [shop, setShop] = React.useState([])
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setShop(json))
      .catch(err => console.log(err))
  }, [])

  const handleChange = (event, value) => {
    setPage(value)
  }

  // Pagination logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedShop = shop.slice(startIndex, endIndex)
  const pageCount = Math.ceil(shop.length / ITEMS_PER_PAGE)

  return (
    <div>
      <div className='shop' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {paginatedShop.map(item => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
      </div>
    </div>
  )
}

export default Shop