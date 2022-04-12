import React ,{useState}from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
     
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">React_Cart For Fruit SHOP</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart"><i className="material-icons" size="large">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;