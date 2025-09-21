import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import Filter from '../Components/Filter/Filter'
import Pagination from '@mui/material/Pagination'

const ITEMS_PER_PAGE = 8

const Shop = () => {
  const [shop, setShop] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [category, setCategory] = React.useState('all')
  const [categories, setCategories] = React.useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setShop(json)
        const uniqueCategories = [...new Set(json.map(item => item.category))]
        setCategories(uniqueCategories)
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handleCategoryChange = (event) => {
  setCategory(event.target.value)
  setPage(1)
}

  // Filter products by selected category
  const filteredShop = category === 'all'
    ? shop
    : shop.filter(item => item.category === category)

  // Pagination logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedShop = filteredShop.slice(startIndex, endIndex)
  const pageCount = Math.ceil(filteredShop.length / ITEMS_PER_PAGE)

  

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <Filter categories={categories} value={category} onChange={handleCategoryChange} />
      </div>

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