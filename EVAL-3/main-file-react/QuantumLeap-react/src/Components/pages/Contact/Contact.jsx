import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div>
      <section className="sub-header">
        <h1>CONTACT</h1>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-wrapper">
            
            <div className="contact-form">
              <h3>Send Us A Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><i className="fas fa-phone"></i>+91 123 456 789</p>
              <p><i className="fas fa-envelope"></i>info@example.com</p>
              <p><i className="fas fa-map-marker-alt"></i>123 Street, City, Country</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
