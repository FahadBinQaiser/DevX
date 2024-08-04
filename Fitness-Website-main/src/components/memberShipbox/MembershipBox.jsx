import React from "react";
import './MembershipBox.css'
const MembershipCard = () => {
    return(
        <section className="packages">
            <h1 className="packages-heading">Our <span className="highlight">Membership Plans</span></h1>
            <div className="packages-container">
                <div className="package-box">
                    <h2 className="package-name">Standard Plan</h2>
                    <div className="package-price">$50/month</div>
                    <ul className="package-points">
                        <li>Access to basic gym facilities</li>
                        <li>Standard fitness classes</li>
                    </ul>
                    <button className="package-btn">Join Now</button>
                </div>
                <div className="package-box">
                    <h2 className="package-name">Premium Plan</h2>
                    <div className="package-price">$100/month</div>
                    <ul className="package-points">
                        <li>Access to all gym facilities</li>
                        <li>Advanced fitness classes</li>
                        <li>Personal trainer sessions</li>
                    </ul>
                    <button className="package-btn">Join Now</button>
                </div>
                <div className="package-box">
                    <h2 className="package-name">Premium+ Plan</h2>
                    <div className="package-price">$150/month</div>
                    <ul className="package-points">
                        <li>Access to all gym facilities</li>
                        <li>Advanced fitness classes</li>
                        <li>Personal trainer sessions</li>
                        <li>Nutritional consultation</li>
                    </ul>
                    <button className="package-btn">Join Now</button>
                </div>
            </div>
        </section>
    )
    
};
export default MembershipCard;