import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navagation = () => {
    const { user, logout } = useAuth()
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <Link style={{ color: 'white' }} to="home">
                            <Button color="inherit">Home</Button>
                        </Link>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link style={{ color: 'white' }} to="register">
                        <Button color="inherit">Register</Button>
                    </Link>
                    <Link style={{ color: 'white' }} to="ourteam">
                        <Button color="inherit">Our Team</Button>
                    </Link>
                    <Link style={{ color: 'white' }} to="login">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navagation;