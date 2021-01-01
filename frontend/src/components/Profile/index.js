import { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { getAllTrainers } from '../../store/trainer';
import {getUser} from '../../store/user';
import {getUserFavorites} from '../../store/user';
import TrainerDisplay from '../TrainerDisplay';
import './Profile.css';

function Profile() {
    const {userId} = useParams();
    const dispatch = useDispatch();
    
    const userStateInfo = useSelector((state)=>{
      return state.user
    });
   
    const currUser = useSelector((state)=>{
      return state.session.user;
    })

    useEffect(()=>{
      dispatch(getAllTrainers(Number(userId)))
      dispatch(getUserFavorites(Number(userId)))
    },[dispatch])
    console.log(currUser)
    return (
      <div>
      <h1>{currUser.username}</h1>
      <h2>Favorites</h2>
      {userStateInfo.length > 0 && userStateInfo[userStateInfo.length -1].Trainer 
      && userStateInfo.map(fav=>
        <>
      <img src={fav.Trainer.profileUrl} />
      <p>{fav.Trainer.name}</p>
      <NavLink to={`/trainer/${fav.Trainer.id}`}>write a review</NavLink>
      </>
      )}

      </div>
    );
  }
  
  export default Profile;