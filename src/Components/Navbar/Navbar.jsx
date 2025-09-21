import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_shopping.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = React.useState("shop")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <Link to="/"><img src={logo} alt='logo' /></Link>
            <p>Product Catalog</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none'}} to="/">Shop</Link> {menu === "shop"?<hr />:<></>}</li>
            <li onClick={() => setMenu("favourites")}><Link style={{ textDecoration: 'none'}} to="/favourites">Favourite products</Link> {menu === "favourites"?<hr />:<></>}</li>
        </ul>
        
    </div>
  )
}

export default Navbar
