import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import caroselOne from '../../../images/img/carosel_1.jpg';
import caroselTwo from '../../../images/img/carosel_2.jpg';
import caroselThree from '../../../images/img/carosel_3.jpg';
import singUp from '../../../images/img/sign_up.jpg';
import './Register.css';


const Register = () => {
    const [loginData, setLoginData] = useState({})


    const { signUsingGoogle } = useAuth();


    return (
        <div>
            
            <section class="">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row p-5 bg-secondary bg-gradient text-white d-flex align-items-center">
                                <div class="col-lg-4">
                                    <h2>Ghevar</h2>
                                    <p>Any recipe for cake that begins "cream butter and sugar" is a butter cake. After the creaming, you add eggs to aerate the batter.</p>
                                </div>
                                <div class="col-lg-8">
                                    <img id="carousel_img" class="d-block w-100" src={caroselOne} alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row p-5 bg-secondary bg-gradient text-white d-flex align-items-center">
                                <div class="col-lg-4">
                                    <h2>German Chocolate Cake</h2>
                                    <p>Pound cake is a relative of butter cake. It's so called because it can be measured as a matter of proportion: a pound of butter, a pound of sugar, a pound of eggs, and a pound of flour.</p>
                                </div>
                                <div class="col-lg-8">
                                    <img id="carousel_img" class="d-block w-100" src={caroselTwo} alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row p-5 bg-secondary bg-gradient text-white d-flex align-items-center">
                                <div class="col-lg-4">
                                    <h2>Gooey Butter Cake</h2>
                                    <p>In Italy and France, a sponge cake is called genoise; in genoise, whole eggs are beaten with sugar until they're thick and ribbony, and then flour.</p>
                                </div>
                                <div class="col-lg-8">
                                    <img id="carousel_img" class="d-block w-100" src={caroselThree} alt="First slide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2 className='mt-3'>Sign Up</h2>
                        
                        <TextField
                        id="filled-basic"
                        
                        label="Your Name"
                        variant="filled" />
                        



                        <Button className="mt-5" style={{ width: '75%' }} variant="contained">Sign-Up</Button>
                        
                        <Button onClick={signUsingGoogle} className="mt-5" style={{ width: '75%' }} variant="contained" color="success">Sign-Up Using Google </Button>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img className='img-fluid' src={singUp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;