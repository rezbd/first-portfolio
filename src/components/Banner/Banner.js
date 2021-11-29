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
                </div>
                <div className="col-12 col-md-6">
                    <img className="portrait" src={portrait} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;