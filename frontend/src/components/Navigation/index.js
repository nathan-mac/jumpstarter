import React from 'react';
import { a } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="session-links">
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div className="user-links">
        <a href="/login">Log In</a>
        <a href="/signup">Sign Up</a>
      </div>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="nav-links-home">
          <a href="/">Home</a>
        </div>
        <div className="nav-links-projects">
          <a href="/projects">Projects</a>
        </div>
      </div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
