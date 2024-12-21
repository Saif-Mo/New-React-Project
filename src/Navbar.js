import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from './Layer 1.png';

function Navbar() {
  return (
    <header
      style={{padding: '10px 20px',display: 'flex',justifyContent:'space-between',alignItems:'center',borderBottom: '1px solid white'}}>
      <img src={Logo} alt='Bermibolo security logo' style={ { width: '150px', height: '98px', marginLeft:'20px'}}
      />
      <nav className='navbar sticky-bottom'>
        <ul style={{ display: 'flex', listStyle: 'none', gap:'15px'}}>
          <li>
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
              Main
            </Link>
          </li>
          <li>
            <Link to='/products' style={{ color: 'white', textDecoration: 'none' }}>
              Products
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
