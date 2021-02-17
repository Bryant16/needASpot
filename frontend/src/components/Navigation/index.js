import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from '../../images/needASpot.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const signUpPage = (e)=>{
    e.preventDefault();
    history.push('/sign-up')
  }
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
        <button onClick={signUpPage}>Sign Up</button>
      </>
    );
  }

  return (
    <ul className='navBar'>
      <li>
        <NavLink exact to="/"><img className='logo' alt="" src={logo} /></NavLink>
      </li>
      <li>
      <div className="my_page_links">
        ©<p> Bryant Klein</p>
          <p>
          <a href="https://github.com/Bryant16">
            <i className="fab fa-github" />
          </a>
          </p>
          <p>
          <a href="https://www.linkedin.com/in/bryant-klein-927915134/">
            <i className="fab fa-linkedin-in" />
          </a>
          </p>
          <p>
          <a href='mailto:kleinb1616@gmail.com'>
              <i className='far fa-envelope' />
            </a>
          </p>
        </div>
      </li>
      <li className='items'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;