import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import Filter from '../Components/Filter/Filter'
import Pagination from '@mui/material/Pagination'
import SortPrice from '../Components/Sort/SortPrice'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';


const ITEMS_PER_PAGE = 8

const Shop = ({ favourites, onFavourite }) => {
  const [shop, setShop] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [category, setCategory] = React.useState('all')
  const [categories, setCategories] = React.useState([])
  const [sortOrder, setSortOrder] = React.useState('none');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    
    
    const fetchData = fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setShop(json)
        const uniqueCategories = [...new Set(json.map(item => item.category))]
        setCategories(uniqueCategories)
      })
      .catch(err => console.log(err));

    const timer = new Promise(resolve => setTimeout(resolve, 2000));

    
    Promise.all([fetchData, timer])
      .then(() => {
        setLoading(false);
      });
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

  const handleSearchChange = (event) => {
  setSearch(event.target.value);
};


  const filteredShop = shop.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  
const categoryFilteredShop = category === 'all'
    ? filteredShop
    : filteredShop.filter(item => item.category === category);

  
  let sortedShop = [...categoryFilteredShop];
if (sortOrder === 'asc') {
  sortedShop.sort((a, b) => a.price - b.price);
} else if (sortOrder === 'desc') {
  sortedShop.sort((a, b) => b.price - a.price);
}
  

  
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedShop = sortedShop.slice(startIndex, endIndex);
  const pageCount = Math.ceil(sortedShop.length / ITEMS_PER_PAGE)

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', padding: '0 1rem', gap: '1rem', flexWrap: 'wrap' }}>
            <Filter categories={categories} value={category} onChange={handleCategoryChange} />
            <SortPrice value={sortOrder} onChange={handleSortChange} />
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              sx={{ width: '300px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Grid container spacing={3} justifyContent="center">
            {paginatedShop.map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
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
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <Pagination count={pageCount} page={page} onChange={handlePaginationChange} color="primary" />
      </div>
    </div>
  )
}

export default Shop