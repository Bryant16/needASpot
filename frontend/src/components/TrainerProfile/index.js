import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import {newFavoriteTrainer, removeFavoriteTrainer} from '../../store/user';
import {getUserFavorites} from '../../store/user';
import {getAllTrainers} from '../../store/trainer';
import ReviewForm from '../ReviewForm';
import './TrainerProfile.css';

function TrainerProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [load, setLoad] = useState(false);
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  const favorites = useSelector((state)=>{
    return state.user;
  });
  const trainerLookUpId = Number(id);
  let trainerIsFavorited = favorites.filter((fav)=> Number(fav.trainerId) === trainerLookUpId)
  
  const [activeButton, setActiveButton] = useState(!trainerIsFavorited.toString());
  
  const sessionUser = useSelector(state => state.session.user)
  const userId = Number(sessionUser.id);
  
  const trainerDetails = trainers.filter((train) => train.id === trainerLookUpId);
  const singleTrainer = trainerDetails[0];
  
  
  // console.log(favorites)
  const favorite = (e)=>{
    e.preventDefault();
    if(trainerIsFavorited.length > 0){
      
      setActiveButton(true)
      dispatch(removeFavoriteTrainer(userId,trainerLookUpId))
    }else{
      
      setActiveButton(false)
      dispatch(newFavoriteTrainer(userId,trainerLookUpId))
    }
  }
  useEffect(()=>{
    dispatch(getAllTrainers())
    dispatch(getUserFavorites(sessionUser.id));
  },[dispatch ])
  console.log(favorites)
  return (trainers.length > 0  && favorites.length > 0 &&
      <div>
      <h1>Name: {singleTrainer.name}
      <button className={activeButton ? `favoriteButton` : null} onClick={favorite}>Favorite</button>
      </h1>
      <h2>{singleTrainer.certifications}</h2>
      <h2>reviews</h2>
      <ReviewForm />
      {singleTrainer.Reviews.map((review) => (
        <h2>{review.review}</h2>
      ))}
      </div>

  );
}

export default TrainerProfile;
