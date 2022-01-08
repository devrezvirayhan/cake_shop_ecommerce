import React from 'react';
import headerimg from '../../../images/img/header.jpg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <img id='header_img' className='img-fluid' src={headerimg} alt="" />
        </div>
    );
};

export default Header;