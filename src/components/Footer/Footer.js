import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark py-5">
                <div className="col-12 col-md-6 mx-auto">
                    <div>
                        <h5 className="text-light">Portfolio of Rezwanur Rakib Chy</h5>
                        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/rezbd"><i className="text-info fs-4 me-3 fab fa-github-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rezbd/"><i className="text-info fs-4 me-3 fab fa-linkedin"></i></a>
                            <a target="_blank" rel="noreferrer" href="mailto:rezwan6@gmail.com"><i className="text-info fs-4 me-3 fas fa-envelope-square"></i></a>
                            <a target="_blank" rel="noreferrer" href="http://facebook.com/rezbd"><i className="text-info fs-4 me-3 fab fa-facebook-square"></i></a>
                            {/* <i className="fs-3 me-3 fas fa-file"></i> */}
                        </div>
                        <small className="text-light">Designed & Developed by A H M Rezwanur Rakib Chy</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;