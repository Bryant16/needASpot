import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../Home'
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from '../../images/needASpot.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='navBar'>
      <li>
        <NavLink exact to="/"><img className='logo' src={logo} /></NavLink>
      </li>
      <li className='items'>
        {isLoaded && sessionLinks}
        <i class="far fa-calendar"></i>
          <i class="far fa-bell"></i>
          <i class="fas fa-search"></i>
      </li>
    </ul>
  );
}

export default Navigation;