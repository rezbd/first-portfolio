import React from 'react';
import portrait from '../../images/portfolio-portrait-square.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container bg-dark text-light">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h4>Hello, I am</h4>
                    <h1>Rezwanur Rakib Chy</h1>
                    <h4>React Developer</h4>
                    <p>I'm a self-motivated developer. I like to explore technologies and found web development as my passion. While in love with JavaScript, I try to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment. My strength is that I like to take challenges and improve my skills continuously.</p>
                    <div className="icons">
                        <i className="fs-3 me-3 fab fa-github-square"></i>
                        <i className="fs-3 me-3 fab fa-linkedin"></i>
                        <i className="fs-3 me-3 fas fa-envelope-square"></i>
                        <i className="fs-3 me-3 fab fa-facebook-square"></i>
                    </div>
                    <div>
                        <button className="btn btn-info me-4">My Resume</button>
                        <button className="btn btn-outline-info">Get in touch</button>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img className="portrait" src={portrait} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;