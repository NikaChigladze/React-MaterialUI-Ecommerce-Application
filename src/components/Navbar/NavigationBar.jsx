import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = ({ cartItems }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <Link to='/cart'>
            <Badge badgeContent={cartItems ? cartItems : '0'} color='warning'>
              <ShoppingBasketIcon className='nav-cart-icon' />
            </Badge>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationBar;
