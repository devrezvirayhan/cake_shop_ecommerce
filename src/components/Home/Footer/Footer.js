import React from 'react';

const Footer = () => {
    return (

        <div style={{ backgroundColor: 'black', color:'white' }} >
            <div className='container'>
                <div className="row p-5">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <h1>Frist Pages</h1>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h3>Second Pages</h3>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Thard Pages</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;