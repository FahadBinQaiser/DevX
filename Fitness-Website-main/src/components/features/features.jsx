import React from "react";
import "./features.css"
import gymImage from '../../assets/images/two-gym-man.jpg'; 
import gymImage2 from '../../assets/images/ai-man.jpg'
const Features=()=>{
    return(
        <>
        <div class="feature-section">
  <h1 class="feature-heading">features</h1>
  <div class="feature-content">
    <div class="image-container">
      <img src={gymImage} alt="Two gym" class="two-gym" />
    </div>
    <div class="content1">
      <h2 class="feature-second-heading">Get More With Low Cost <span class="highlight">Advanced</span> Features.</h2>
      <p>Access <span class="highlight">advanced</span> features typically found in higher-priced options. Enjoy increased benefits without the hefty price tag, maximizing your investment.</p>
    </div>
  </div>
  <div class="feature-content">
    <div class="content1">
      <h2 class="feature-second-heading">Smart <span class="highlight">Workout</span> & Health Metrics.</h2>
      <p>Track your progress and reach your goals with our comprehensive workout and health metrics features. Stay motivated and informed every step of the way.</p>
    </div>
    <div class="image-container">
      <img src={gymImage2} alt="Gym workout" class="two-gym2" />
    </div>
  </div>
</div>

</>

    )
}
export default Features;