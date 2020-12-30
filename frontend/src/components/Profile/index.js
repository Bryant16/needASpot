import { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUser} from '../../store/user';

function Profile() {
    const {userId} = useParams();
    const userStateInfor = useSelector((state)=>{
      return state.user
    });


    return (
      <div>
      <h1>My Profile page</h1>
      <h2>Favorites</h2>

      </div>
    );
  }
  
  export default Profile;