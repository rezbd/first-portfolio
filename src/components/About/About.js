import React from 'react';
import about from '../../images/about1.jpg'

const About = () => {
    return (
        <div className="bg-dark text-white">
            <section className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h5 className="text-info">I am</h5>
                        <h2 className="mb-3">A H M REZWANUR RAKIB CHY</h2>
                        <p>
                            A self-motivated developer. I like to explore technologies and found web development as my passion. I started to learn web development to make a living out of it. Once I started coding, I wanted to make it my lifetime career.
                        </p>
                        <p>
                            I may haven't been in this field for a long time, but I'm not entirely new to technology. I've been involved with Linux communities and using Linux since 2011. An admin of the Ubuntu Bangladesh Facebook page for eight years. I hope this will add an advantage to my programming career.
                        </p>
                        <p>
                            I like to spend my free time with family, especially playing with my daughter. I also like to get myself involved with non-profit organizations. I'm a fan of classic movies. 'Seven Samurai' is my favorite film.
                        </p>
                        <p>
                            Want to learn more about me? Get in touch.
                        </p>
                        <div className="icons">

                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd"><i className="text-info fs-3 me-3 fab fa-github-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rezbd/"><i className="text-info fs-3 me-3 fab fa-linkedin"></i></a>
                            <a target="_blank" rel="noreferrer" href="mailto:rezwan6@gmail.com"><i className="text-info fs-3 me-3 fas fa-envelope-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="http://facebook.com/rezbd"><i className="text-info fs-3 me-3 fab fa-facebook-square"></i></a>
                            {/* <i className="fs-3 me-3 fas fa-file"></i> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <img style={{ width: "100%", borderRadius: "20%" }} src={about} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>My Skills</h2>
                        <h4>Comfortable:</h4>
                        <div className="technologies">
                            <div className="py-2">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                            </div>
                            <div>
                                <span>React Router</span>
                                <span>Responsive Design</span>
                            </div>
                        </div>
                        <h4>Familiar</h4>
                        <div className="technologies">
                            <div className="py-2">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>NoSQL</span>
                                <span>Debugging</span>
                            </div>
                            <div>
                                <span>React Bootstrap</span>
                                <span>Material UI</span>
                                <span>REST API</span>
                            </div>
                        </div>
                        <h4>Other Skills</h4>
                        <div className="technologies">
                            <div className="py-2">
                                <span>Gimp</span>
                                <span>Linux</span>
                                <span>Bash</span>
                                <span>Excel</span>
                            </div>
                        </div>
                        <h4>Tools</h4>
                        <div className="technologies">
                            <div className="py-2">
                                <span>Chrome Dev Tools</span>
                                <span>VS Code</span>
                                <span>Git</span>
                                <span>Github</span>
                            </div>
                            <div className="pb-2">
                                <span>Firebase</span>
                                <span>Netlify</span>
                                <span>Heroku</span>
                                <span>MongoDB</span>
                            </div>
                            <div>
                                <span>Probhat Keyboard</span>
                                <span>Tor</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>My Education</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;