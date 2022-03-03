import React from 'react';
import Category from '../../Category/Category';
import Experts from '../Experts/Experts';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Category></Category>
            <Experts></Experts>
            <br /><br /><br /><br />
            
        </div>
    );
};

export default Home;