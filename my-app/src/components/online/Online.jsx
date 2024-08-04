import React from 'react';
import "./online.css";

export default function Online({ user }) {
  // If the user's name matches, skip rendering
  if (user.username === "Fahad Bin Qaiser") {
    return null;
  }

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img className='rightbarProfileImage' src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

