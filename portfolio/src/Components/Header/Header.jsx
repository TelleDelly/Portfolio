import './Header.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className='header-container'>
        <h1>Martin Wilson</h1>
        <div className='header-button-group'>
        <Button className='header-button' href="https://github.com/TelleDelly">GitHub</Button>
        <Button className='header-button' href='https://www.linkedin.com/in/martin-wilson-tel/'>LinkedIn</Button>
        </div>
    </div>
  )
}

export default Header