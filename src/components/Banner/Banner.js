import React from 'react';
import portrait from '../../images/portrait-2-sq.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container bg-dark text-light banner-container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h4>Hello, I am</h4>
                    <h1>Rezwanur Rakib Chy</h1>
                    <h4>Backend-Focused Full-Stack Developer</h4>
                    <p>Self-motivated developer passionate about building reliable and scalable web applications. Strong focus on backend systems with JavaScript and modern frameworks, continuously improving through real-world challenges and evolving technologies.</p>
                    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/rezbd"><i className="text-info fs-3 me-3 fab fa-github-square"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rezbd/"><i className="text-info fs-3 me-3 fab fa-linkedin"></i></a>
                        <a target="_blank" rel="noreferrer" href="mailto:rezwan6@gmail.com"><i className="text-info fs-3 me-3 fas fa-envelope-square"></i></a>
                        <a target="_blank" rel="noreferrer" href="http://facebook.com/rezbd"><i className="text-info fs-3 me-3 fab fa-facebook-square"></i></a>
                        {/* <i className="fs-3 me-3 fas fa-file"></i> */}
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" className="btn btn-info me-4" href="https://drive.google.com/file/d/1Bj5lP8pf-SmNYj5Q_wxbeHvG91n7eHHE/view?usp=sharing">My Resume</a>
                        <button className="btn btn-outline-info">Get in touch</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 py-3">
                    <img className="portrait" src={portrait} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;