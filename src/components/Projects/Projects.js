import React from 'react';
import './Projects.css';
import antiqueCars1 from '../../images/antique-cars-1.jpg'
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
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/antique-cars-client-side"><i className="text-info fs-4 me-3 fas fa-external-link-square-alt"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/antique-cars-client-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd/antique-cars-server-side"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;