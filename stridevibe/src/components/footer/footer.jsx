import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <span className="highlight2">StrideVibe</span>
                </div>
                <div className="footer-contact">
                    <p>Contact me: <a href="mailto:fahadbinqaiser3@gmail.com">fahadbinqaiser3</a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/fahaddev/">fahaddev</a></p>
                </div>
                <div className="footer-submission">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" required placeholder="Enter Email" />
                    <div className="btn">
                        <a href="#">
                            <button>Submit</button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
