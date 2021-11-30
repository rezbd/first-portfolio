import React from 'react';
import './Projects.css';
import antiqueCars1 from '../../images/antique-cars-1_1.jpg'
import travelSylhet1 from '../../images/travel-sylhet1_3.jpg'
import ayurveda1 from '../../images/ayurveda1_1.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="container text-light">
            <h2 className="my-5">Some of My Projects</h2>
            <div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <img width="100%" src={antiqueCars1} alt="" />
                    </div>
                    <div className="col-12 col-md-5 py-3">
                        <h3>Antique Cars</h3>
                        <p>A full-stack web application to sell vintage and extraordinary solid rust and accident free classic cars from 1920s to 1940s.</p>
                        <Link to="">
                            <button className="mb-3 mt-1 btn btn-sm btn-outline-info">Learn More</button>
                        </Link>
                        <div className="technologies">
                            <div className="py-2">
                                <span>React.js</span>
                                <span>Bootstrap5</span>
                                <span>Node.js</span>
                            </div>
                            <div>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Heroku</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a target="_blank" rel="noreferrer" href="https://antique-cars.web.app/"><i className="text-info fs-4 me-3 fas fa-external-link-square-alt"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/antique-cars-client-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/antique-cars-server-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                        </div>

                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-7">
                        <img width="100%" src={travelSylhet1} alt="" />
                    </div>
                    <div className="col-12 col-md-5 py-3">
                        <h3>Travel Sylhet</h3>
                        <p>A full-stack website that provides tour plans in Sylhet. Images and dynamic information are loaded from a NoSQL database.</p>
                        <Link to="">
                            <button className="mb-3 mt-1 btn btn-sm btn-outline-info">Learn More</button>
                        </Link>
                        <div className="technologies">
                            <div className="py-2">
                                <span>React.js</span>
                                <span>Bootstrap5</span>
                                <span>Node.js</span>
                            </div>
                            <div>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Heroku</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a target="_blank" rel="noreferrer" href="https://travel-sylhet-5b76e.web.app/"><i className="text-info fs-4 me-3 fas fa-external-link-square-alt"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/travel-sylhet-client-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/travel-sylhet-server-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                        </div>

                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-7">
                        <img width="100%" src={ayurveda1} alt="" />
                    </div>
                    <div className="col-12 col-md-5 py-3">
                        <h3>Eastern Ayurveda</h3>
                        <p>A web application that features traditional ayurvedic remedies. Promotes internal cleansing for improved health.</p>
                        <Link to="">
                            <button className="mb-3 mt-1 btn btn-sm btn-outline-info">Learn More</button>
                        </Link>
                        <div className="technologies">
                            <div className="py-2">
                                <span>React.js</span>
                                <span>React Router</span>
                                <span>Firebase</span>
                            </div>
                            <div>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap5</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a target="_blank" rel="noreferrer" href="https://eastern-ayurveda.web.app/"><i className="text-info fs-4 me-3 fas fa-external-link-square-alt"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/eastern-ayurveda"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;