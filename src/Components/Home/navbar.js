import React from 'react'

 const Navbar = () => {
  return (
    <div className='navbar-wrap'>
    <div className='navbar-left'>
    <div className='company-title'>my company.com</div>
    </div>
    <div className='navbar-center'>
    <div className='nav-items'>THE EDIT</div>
    <div className='nav-items'>NEW ARRIVALS</div>
    <div className='nav-items'>DESIGNERS</div>
    <div className='nav-items'>CLOTHING</div>
    <div className='nav-items'>SHOES</div>
    <div className='nav-items'>BAGS</div>
    <div className='nav-items'>ACCESSORIES</div>
    <div className='nav-items'>JEWELRY</div>
    <div className='nav-items'>BEAUTY</div>
    <div className='nav-items'>HOME</div>
    </div>
    
    <div className='navbar-right'>
  <div className='nav-search'></div>
    <div className='nav-cart'></div>
    <div className='nav-account'></div>
    <div className='nav-collapse'></div>
  </div>
  </div>
  )
}
export default Navbar;