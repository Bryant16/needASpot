import { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUser} from '../../store/user';
import {getUserFavorites} from '../../store/user';
import TrainerDisplay from '../TrainerDisplay';
function Profile() {
    const {userId} = useParams();
    const dispatch = useDispatch();
    
    const userStateInfo = useSelector((state)=>{
      return state.user
    });
    // let trainersToFindIds = userStateInfo.map(fav => fav.trainerId );
    // let trainers = trainerState.map(train=> trainersToFindIds.include(train.id))
    // console.log(trainersToFindIds)
    // console.log(trainers)
    
    // userStateInfo.map(fav => console.log(fav.Trainer.name))
    console.log(Number(userId))
    useEffect(()=>{
      dispatch(getUserFavorites(Number(userId)))
    },[dispatch])

    return (
      <div>
      <h1>My Profile page</h1>
      <h2>Favorites</h2>
      {userStateInfo[userStateInfo.length -1].Trainer && userStateInfo.map(fav=><p>{fav.Trainer.name}</p>)}

      </div>
    );
  }
  
  export default Profile;