import React from 'react';
import emailjs from 'emailjs-com';

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
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <h2>Contact Form</h2>
                    <form className="d-flex flex-column" onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Full Name" />

                        <label>Email</label>
                        <input type="email" name="user_email" className="form-control" placeholder="Email Address" />

                        <label>Subject</label>
                        <input type="text" name="subject" className="form-control" placeholder="Subject" />

                        <label>Message</label>
                        <textarea name="message" rows="4" className="form-control" placeholder="Your Message" />

                        <input
                            type="submit"
                            value="Send"
                            className="form-control btn btn-warning"
                            style={{ marginTop: "30px" }}
                        />
                    </form>
                    <p><em>sending to rezwan6@gmail.com</em></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;