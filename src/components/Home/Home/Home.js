import React from 'react';
import Category from '../../Category/Category';
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
            <Category></Category>
            <Experts></Experts>
            <br /><br /><br /><br />
            
        </div>
    );
};

export default Home;