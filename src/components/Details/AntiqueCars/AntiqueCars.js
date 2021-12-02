import React from 'react';
import { Link } from 'react-router-dom';
import antique1 from '../../../images/antique-cars-1_1.jpg'
import antique2 from '../../../images/antique-cars-2_1.jpg'
import antique3 from '../../../images/antique-cars-3_1.jpg'
import './AntiqueCars.css'

const AntiqueCars = () => {
    return (
        <div style={{ paddingTop: "80px", paddingBottom: "80px" }} className="bg-dark text-light">
            <div className="row container mx-auto">
                <h2 style={{ paddingBottom: "30px" }}>Antique Cars</h2>
                <div className="col-12 col-md-6">
                    <img className="w-100 mb-4" src={antique1} alt="" />
                    <img className="w-100 mb-4" src={antique2} alt="" />
                    <img className="w-100 mb-4" src={antique3} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <p style={{ marginBottom: "30px" }}>A full-stack web application to sell vintage and extraordinary solid rust and accident free classic cars from 1920s to 1940s.</p>
                    <div style={{ textAlign: "left", marginBottom: "30px", marginLeft: "14px" }}>
                        <li>The website's users can log in with their email and password that secures their identity while they browse and order from the car collections.</li>
                        <li>After login, users and admins see different dashboards with different functionalities.</li>
                        <li>The users can review any cars they want from the website and provide valuable feedback and ratings. All of the reviews and ratings appear on the home page.</li>
                        <li>The users can see their orders after placing orders and, the website provides the option to cancel the orders anytime they want before the product is shipped.</li>
                        <li>Admins can make another user admin. Admins can also manage the products when necessary, like adding a newly restored classic car or removing the faulty ones.</li>
                    </div>
                    <div style={{ marginBottom: "35px" }}>
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
                    <div style={{ marginBottom: "40px" }}>
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

export default AntiqueCars;