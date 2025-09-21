import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import Filter from '../Components/Filter/Filter'
import Pagination from '@mui/material/Pagination'
import SortPrice from '../Components/Sort/SortPrice'

const ITEMS_PER_PAGE = 8

const Shop = ({ favourites, onFavourite }) => {
  const [shop, setShop] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [category, setCategory] = React.useState('all')
  const [categories, setCategories] = React.useState([])
  const [sortOrder, setSortOrder] = React.useState('none');

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

  const handleSortChange = (event) => {
  setSortOrder(event.target.value);
};

  const handlePaginationChange = (event, value) => {
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

  // Sort products by price
  let sortedShop = [...filteredShop];
if (sortOrder === 'asc') {
  sortedShop.sort((a, b) => a.price - b.price);
} else if (sortOrder === 'desc') {
  sortedShop.sort((a, b) => b.price - a.price);
}
  

  // Pagination logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedShop = sortedShop.slice(startIndex, endIndex);
  const pageCount = Math.ceil(sortedShop.length / ITEMS_PER_PAGE)

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', padding: '0 1rem', gap: '1rem', flexWrap: 'wrap' }}>
        <Filter categories={categories} value={category} onChange={handleCategoryChange} />
         <SortPrice value={sortOrder} onChange={handleSortChange} />
      </div>

      <div className='shop' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {paginatedShop.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            isFavourite={favourites.includes(item.id)}
            onFavourite={onFavourite}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <Pagination count={pageCount} page={page} onChange={handlePaginationChange} color="primary" />
      </div>
    </div>
  )
}

export default Shop