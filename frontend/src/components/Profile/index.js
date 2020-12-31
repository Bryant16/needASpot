import { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUser} from '../../store/user';

function Profile() {
    const {userId} = useParams();
    const trainerState = useSelector((state)=>{
      return state.trainer;
    })
    const userStateInfo = useSelector((state)=>{
      return state.user
    });
    // let trainersToFindIds = userStateInfo.map(fav => fav.trainerId );
    // let trainers = trainerState.map(train=> trainersToFindIds.include(train.id))
    // console.log(trainersToFindIds)
    // console.log(trainers)


    return (
      <div>
      <h1>My Profile page</h1>
      <h2>Favorites</h2>

      </div>
    );
  }
  
  export default Profile;