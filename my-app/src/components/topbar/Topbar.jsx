// my-app/src/components/topbar/Topbar.jsx
import React from 'react';
import './Topbar.css'; // Correctly import CSS file
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'; // Import Link

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
      <Link to="/" className="logo">VibeConnect</Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for post, friend or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <Link to="/login" className="topBarLink">Login</Link>
          <Link to="/register" className="topBarLink">Register</Link>
          <Link to="/profile" className="topBarLink">Profile</Link> {/* New link */}
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon />
            <div className="topBarIconBadge">1</div>
          </div>
          <div className="topBarIconItem">
            <ChatIcon />
            <div className="topBarIconBadge">2</div>
          </div>
          <div className="topBarIconItem">
            <NotificationsIcon />
            <div className="topBarIconBadge">3</div>
          </div>
        </div>
        <img src="/assets/1714572224841.jpg" alt="" className='topBarImage' />
      </div>
    </div>
  );
}
