import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';

const FavouriteProducts = ({ favourites, onFavourite }) => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setShop(json))
      .catch(err => console.log(err));
  }, []);

  const favouriteProducts = shop.filter(item => favourites.includes(item.id));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {favouriteProducts.map(item => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          isFavourite={true}
          onFavourite={() => {onFavourite(item.id)}} 
        />
      ))}
    </div>
  );
};

export default FavouriteProducts;