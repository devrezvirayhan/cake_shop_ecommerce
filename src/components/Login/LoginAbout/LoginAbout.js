import React from 'react';
import loginAbout1 from '../../../images/img/login_cake_1.jpg';
import loginAbout2 from '../../../images/img/login_cake_2.jpg';
import loginAbout3 from '../../../images/img/login_cake_3.jpg';
import loginAbout4 from '../../../images/img/login_cake_4.jpg';
const LoginAbout = () => {
    return (
        <div>
            <div className='bg-dark text-white p-3 border'>
                <div className="container">
                    <h2 className='text-white p-2'>Our Shops</h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className='img-fluid img-thumbnail' src={loginAbout1} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className='img-fluid img-thumbnail' src={loginAbout2} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className='img-fluid img-thumbnail' src={loginAbout3} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className='img-fluid img-thumbnail' src={loginAbout4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAbout;