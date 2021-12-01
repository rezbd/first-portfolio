import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w9ctr69', 'template_cpfx6r5', e.target, "user_PuroVjFPv9cug9LcytwSR")
            .then(result => {
                alert("message sent successfully!")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto form-container">
                        <h3 className="text-warning">CONTACT ME</h3>
                        <form className="d-flex flex-column" onSubmit={sendEmail}>
                            <label className="mb-2 mt-3">Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Full Name" />

                            <label className="mb-2 mt-3">Email</label>
                            <input type="email" name="user_email" className="form-control" placeholder="Email Address" />

                            <label className="mb-2 mt-3">Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Subject" />

                            <label className="mb-2 mt-3">Message</label>
                            <textarea name="message" rows="4" className="form-control" placeholder="Your Message" />

                            <input
                                type="submit"
                                value="Send"
                                className="form-control btn btn-warning"
                                style={{ marginTop: "30px" }}
                            />
                        </form>

                        <p className="pt-3"><em>Sending to: <a style={{ color: 'turquoise' }} target="_blank" rel="noreferrer" href="mailto:rezwan6@gmail.com">rezwan6@gmail.com</a></em></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;