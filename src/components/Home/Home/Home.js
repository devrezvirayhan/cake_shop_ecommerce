import React from 'react';
import Experts from '../Experts/Experts';
import Header from '../Header/Header';
import Navagation from '../Navagation/Navagation';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navagation></Navagation>
            <Header></Header>
            <Products></Products>
            <Experts></Experts>
        </div>
    );
};

export default Home;