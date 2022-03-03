import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signin from '../../images/img/sign-in.jpg';
import './Login.css';


const Login = () => {

    const {signUsingGoogle} = useAuth();
    const handleSubmit = e=> {
        alert('Login Success')
        e.preventDefault();
    }


    return (
        <div>
            <div id="backround_anymation">

            </div>
            <div className='container mt-2'>
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2 className=''>Login </h2>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                className="mt-1"
                                type='email'
                                name='email'
                                style={{ width: '75%', }}
                                id="filled-basic"
                                label="Email"
                                variant="filled" />
                            <TextField
                                className="mt-3"
                                type='password'
                                name='password'
                                style={{ width: '75%', }}
                                id="filled-basic"
                                label="Password"
                                variant="filled" />
                            <Button type="submit" className="mt-3" style={{ width: '75%' }} variant="contained" color="success"> Login </Button> <br /> <br />


                            <Button onClick={signUsingGoogle} className="mt-3" style={{ width: '75%' }} variant="contained" color="success"> Login Using Google </Button>

                            <NavLink className="mt-3" style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </form>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img className='img-fluid' src={signin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;