import React from 'react';
import logo from '../../../images/img/logo.png';
import payment from '../../../images/img/payment.jpg';
const Footer = () => {
    return (

        <div style={{ backgroundColor: '#4400bd', color:'white' }} >
            <div className='container'>
                <div className="row p-5">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img className='mb-3' style={{width:'50%'}} src={logo} alt="" /> <br />
                        <img style={{width:'10%'}} src="https://img.icons8.com/external-flaticons-flat-flat-icons/50/000000/external-locations-digital-nomading-relocation-flaticons-flat-flat-icons-2.png"/><span> Fetama Centre, Barisal-Sadar, Barisal</span>
                        <br />
                        <img className='mr-3' style={{width:'5%'}}  src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-email-communication-nawicon-outline-color-nawicon-2.png"/> <span className='mr-1'>Official: barisalcake1@gmail.com</span> <br />
                        
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div>
                          <ul>
                              <li style={{listStyle:'none'}}><a style={{color:'white'}} href=""><h6>About Us</h6></a></li>
                              <li style={{listStyle:'none'}}><a style={{color:'white'}} href=""><h6>Success</h6></a></li>
                              <li style={{listStyle:'none'}}><a style={{color:'white'}} href=""><h6>Refund policy</h6></a></li>
                              <li style={{listStyle:'none'}}><a style={{color:'white'}} href=""><h6>Privacy Policy</h6></a></li>
                              <li style={{listStyle:'none'}}><a style={{color:'white'}} href=""><h6>Terms and Conditions</h6></a></li>
                          </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className='img-fluid img-thumbnail' src={payment} alt="" />
                    </div>
                </div>
            </div>
            <div className="container p-2">
                Copyright © 2022 Infra Polytechnic Institute Coding Club Team
            </div>
        </div>
    );
};

export default Footer;