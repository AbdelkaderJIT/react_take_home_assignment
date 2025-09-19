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
            <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link> {menu === "shop"?<hr />:<></>}</li>
            <li onClick={() => setMenu("men")}><Link to="/men">Men's Clothing</Link> {menu === "men"?<hr />:<></>}</li>
            <li onClick={() => setMenu("women")}><Link to="/women">Women's Clothing</Link> {menu === "women"?<hr />:<></>}</li>
            <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link> {menu === "kids"?<hr />:<></>}</li>
        </ul>
        
    </div>
  )
}

export default Navbar
