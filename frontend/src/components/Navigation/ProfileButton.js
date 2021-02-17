import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  let history = useHistory();
  const openMenu = (e) => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  const profile = (e)=>{
    e.preventDefault();
    history.push(`/profile/${user.id}`)
  };

  return (
    <>
      <button id='user_profile_logout_button' onClick={openMenu} >
        <i className="far fa-user" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='userName'>Hello, {user.username}!</li>
          <li className="profileButtons">
          <button onClick={profile}>My Profile</button>
          </li>
          <li className="profileButtons">
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
