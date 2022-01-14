import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Farjana from '../../images/img/Farjana.jpg';
import Mainul from '../../images/img/Mainul.jpg';
import RezviRayhan from '../../images/img/Rezvi_Rayhan.jpg';
import Yeasin from '../../images/img/Yeasin.jpg';
import Navagation from '../Home/Navagation/Navagation';
import './OurTeam.css';




const OurTeam = () => {
    return (
        <div>
            <Navagation></Navagation>
            <Zoom top cascade>
                <div id="team_bg">
                    <h1 className='text-white pt-5'>Our Developer Campus.</h1>
                    <h2 className='text-white'>Infra Polytechnic Institute</h2>
                </div>
            </Zoom>
            <div className='container'>
                <h2 className='bg-dark text-white mt-4 p-3'>Our Dedicate Team</h2>
                <div className="row">
                    <Fade left>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Card style={{ width: '70%' }}>
                                <Card.Img className="img-thumbnail" id="team_img" variant="top" src={RezviRayhan} />
                                <Card.Body>
                                    <h2 className='bg-success text-white p-3'>Md. Abu Rayhan</h2>
                                    <Card.Title className='bg-dark text-white p-2'>MERN Stack Web Developer</Card.Title>
                                    <Card.Text className='mt-2'>
                                        In fact, at the moment I am focusing on web development. It's
                                        currently the most popular framework React, working with material UI,
                                        Tailwind CSS, Firebase, Node, Mongo DB, Express JS, Bootstrap Etc. I
                                        like to work on the MERN stack with React.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Card style={{ width: '70%' }}>
                                <Card.Img className="img-thumbnail" id="team_img" variant="top" src={Farjana} />
                                <Card.Body>
                                    <h2 className='bg-success text-white p-3'>Farjana Akhi</h2>
                                    <Card.Title className='bg-dark text-white p-2'>Web Designer || Content Maker</Card.Title>
                                    <Card.Text>
                                        I'm Farjana Akhi. My religion is islam.I'm belong to an aristocratic muslim family. My family consist of 6 members. I'm honest  hard working for success. I like to accept challange. At my free time i help my mother in her ketchen. I want to be a successful programmer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                            <Card style={{ width: '70%' }}>
                                <Card.Img className="img-thumbnail" id="team_img" variant="top" src={Mainul} />
                                <Card.Body>
                                    <h2 className='bg-success text-white p-3'>Md. Mainul</h2>
                                    <Card.Title className='bg-dark text-white p-2'>Web Designer || Graphic Design</Card.Title>
                                    <Card.Text>
                                        My name is Md. Mainul Islam. I am 19 years old. And I have 2 more brothers. I study in the computer department of Barisal Infra Polytechnic Institute. And the essence of my life is to be a programmer.My favorite color is green because the color of nature and green. And I love nature very much.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                            <Card style={{ width: '70%' }}>
                                <Card.Img className="img-thumbnail" id="team_img" variant="top" src={Yeasin} />
                                <Card.Body>
                                    <h2 className='bg-success text-white p-3'>Md. Yeasin</h2>
                                    <Card.Title className='bg-dark text-white p-2'>Android Apps Developer</Card.Title>
                                    <Card.Text>
                                        My name is Md. Yeasin. I study in the computer department of Barisal Infra Polytechnic Institute. My favorite hobby is programming. And the essence of my life is to be a programmer.I'm honest  hard working for success. And I love nature very much.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;

