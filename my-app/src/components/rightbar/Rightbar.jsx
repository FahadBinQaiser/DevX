import React from 'react';  // Import React
import "./rightbar.css";
import { Users } from "../../pages/dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {  // Ensure the component name is capitalized

  const HomeRightbar=()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Doraemon</b> and <b>3 mutual friends</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/fahad8.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u}/>  // Pass the user prop correctly
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lahore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">Pakistan</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImage' src="assets/profile-pic.png" alt="" />
            <span className="rightbarFollowingName">Faizan Bin Qaiser</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightBar/>:<HomeRightbar/>  }
      </div>
    </div>
  );
}