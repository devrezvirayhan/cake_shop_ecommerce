import React from 'react';
import brownisCake from '../../images/Category/brownies_cakes.png';
import cupCake from '../../images/Category/cup_cakes.png';
import haempres from '../../images/Category/haempres.png';
import jarCake from '../../images/Category/Jar_cakes.png';
import pastriesCake from '../../images/Category/pastries_cake.png';
import vegenCake from '../../images/Category/vegen_cakes.png';
import './Category.css';

const Category = () => {
    return (
        <div className='container mt-3'>
            <h1 className='my-2 bg-dark text-white p-3'>Category</h1>
            <div id='category_img' className="row">
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={cupCake} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={jarCake} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={pastriesCake} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={brownisCake} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={vegenCake} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='img-fluid my-2' src={haempres} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;