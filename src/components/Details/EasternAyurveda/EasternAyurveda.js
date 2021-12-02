import React from 'react';
import { Link } from 'react-router-dom';
import ayurveda1 from '../../../images/ayurveda1_1.jpg'
import ayurveda2 from '../../../images/ayurveda2.jpg'
import ayurveda3 from '../../../images/ayurveda3.jpg'

const EasternAyurveda = () => {
    return (
        <div style={{ paddingTop: "80px", paddingBottom: "80px", background: "#082032" }} className=" text-light">
            <div className="row container mx-auto">
                <h2 style={{ paddingBottom: "30px" }}>Eastern Ayurveda</h2>
                <div className="col-12 col-md-6">
                    <img className="w-100 mb-4" src={ayurveda1} alt="" />
                    <img className="w-100 mb-4" src={ayurveda2} alt="" />
                    <img className="w-100 mb-4" src={ayurveda3} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <p style={{ marginBottom: "30px" }}>A web application that features traditional ayurvedic remedies. Promotes internal cleansing for improved health.</p>
                    <div style={{ textAlign: "left", marginBottom: "30px", marginLeft: "14px" }}>
                        <li>Google Sign In and Email Login functionality with firebase authentication.</li>
                        <li>Private Route implemented. Users see more options on the header after login.</li>
                        <li>The website is fully responsive for both desktop and mobile devices.</li>
                        <li>A static and responsive three column yoga membership pricing page added.</li>
                        <li>The website is about Ayurveda. Ayurveda is a 5,000-year-old system of natural healing that’s truly stood the test of time. First originating in the Vedic culture of India, it’s actually considered by many to be the oldest healing science there is.</li>
                    </div>
                    <div style={{ marginBottom: "35px" }}>
                        <h5>Technologies Used in Frontend</h5>
                        <div className="technologies">
                            <div className="py-2">
                                <span>React.js</span>
                                <span>React Router</span>
                                <span>Firebase</span>
                            </div>
                            <div>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap 5</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="me-3" to={{ pathname: "https://eastern-ayurveda.web.app/" }} target="_blank">
                            <button className="btn btn-sm btn-outline-info">Live Site</button>
                        </Link>
                        <Link className="me-3" to={{ pathname: "https://github.com/rezbd/eastern-ayurveda" }} target="_blank">
                            <button className="btn btn-sm btn-outline-info">Code Link</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasternAyurveda;