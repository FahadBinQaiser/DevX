import React from "react";
import './download.css'
import myImage from "../../assets/images/pro2.jpg"
const Download=()=>{
    return(
        <div className="feature-content">
        <div className="content1">
         <h2 className="feature-second-heading">Download the app to get more <span className="highlight">benefits.</span></h2>
        <p>Join our <span className="highlight">Fitness family</span> today and start your transformative journey, empowering yourself to feel stronger, healthier, and more confident than ever before.</p>
        </div>
            <div className="image-container">
            <img src={myImage} alt="Two Gym Man" className="two-gym2" />
         </div>
     </div>
    )
}
export default Download;