import React from 'react';


const Expert = ({ expert }) => {
    const { name, country, img, } = expert;

    return (
            <div className='col-lg-4 col-md-6 col-sm-12 my-1'>
                <img className='img-fluid img-thumbnail' src={img} alt="" />
                <h4 className='text-danger'>Name : {name}</h4>
                <h5 className='text-primary'>Country : {country}</h5>
            </div>
    );
};

export default Expert;