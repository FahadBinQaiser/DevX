import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';

export default function Profile() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImage" src="assets/black.jpg" alt="" />
              <img className="profileUserImage" src="assets/1714572224841.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h3 className="profileInfoName">Fahad Bin Qaiser</h3>
              <span className="profileInfoDesc">A 16-year-old developer exploring the journey of web development</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
