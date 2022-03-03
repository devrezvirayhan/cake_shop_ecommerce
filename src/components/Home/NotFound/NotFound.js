import React from 'react';
import { Link } from 'react-router-dom';
import Notound from '../../../images/img/error.jpg';
const NotFound = () => {
    return (
        <div>
            <div>
                <img style={{width:'100%'}} className='img-fluid img-thumbnail' src={Notound} alt="" />
                <Link to="/"><button className='btn btn-primary mb-2'>Go Back To Home </button></Link>
            </div>
        </div>
    );
};

export default NotFound;