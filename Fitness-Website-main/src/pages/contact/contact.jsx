import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subheading">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
        <div className="contact-content">
          <div className="contact-info-form">
            <div className="contact-info">
              <h3>Contact</h3>
              <p><i className="fas fa-envelope"></i> <a href="mailto:fahadbinqaiser3@gmail.com">fahadbinqaiser3@gmail.com</a></p>
              <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/fahaddev/" target="_blank" rel="noopener noreferrer">fahaddev</a></p>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
