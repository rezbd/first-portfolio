import React from 'react';
import { Link } from 'react-router-dom';
import travel1 from '../../../images/travel-sylhet1_3.jpg'
import travel2 from '../../../images/travel2.jpg'
import travel3 from '../../../images/travel3.jpg'

const TravelSylhet = () => {
    return (
        <div style={{ paddingTop: "80px", paddingBottom: "80px" }} className="bg-dark text-light">
            <div className="row container mx-auto">
                <h2 style={{ paddingBottom: "30px" }}>Travel Sylhet</h2>
                <div className="col-12 col-md-6">
                    <img className="w-100 mb-2" src={travel1} alt="" />
                    <img className="w-100 mb-2" src={travel2} alt="" />
                    <img className="w-100 mb-2" src={travel3} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <p style={{ marginBottom: "35px" }}>A full-stack website that provides tour plans in Sylhet. Images and dynamic information are loaded from a NoSQL database.</p>
                    <div style={{ textAlign: "left", marginBottom: "30px", marginLeft: "14px" }}>
                        <li>Users see travel plans with dynamic information loaded from a NoSQL database.</li>
                        <li>The website's users can log in with their email and password that secures their identity while they browse and order from the car collections.</li>
                        <li>A user needs to log in to see details of a tour and fill up a form to place a booking.</li>
                        <li>A user can add and delete custom tour plans that appear on the home page.</li>
                        <li>The website is fully responsive for mobile and desktop. Images are hosted on a third-party website.</li>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                        <h5>Technologies Used in Frontend</h5>
                        <div className="technologies">
                            <div className="py-2">
                                <span>React.js</span>
                                <span>React Router</span>
                            </div>
                            <div>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap 5</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "45px" }}>
                        <h5>Technologies Used in Backend</h5>
                        <div className="technologies">
                            <div className="py-2">
                                <span>Node.js</span>
                                <span>Express.js</span>
                            </div>
                            <div>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Heroku</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="me-3" to={{ pathname: "https://antique-cars.web.app/" }} target="_blank">
                            <button className="btn btn-sm btn-outline-info">Live Site</button>
                        </Link>
                        <Link className="me-3" to={{ pathname: "https://github.com/rezbd/antique-cars-client-side" }} target="_blank">
                            <button className="btn btn-sm btn-outline-info">Client Code</button>
                        </Link>
                        <Link to={{ pathname: "https://github.com/rezbd/antique-cars-server-side" }} target="_blank">
                            <button className="btn btn-sm btn-outline-info">Server Code</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelSylhet;