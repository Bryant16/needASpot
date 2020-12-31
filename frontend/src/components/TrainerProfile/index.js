import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {useEffect} from 'react';
import {newFavoriteTrainer, removeFavoriteTrainer} from '../../store/user';
import {getUserFavorites} from '../../store/user';
import {getAllTrainers} from '../../store/trainer';

function TrainerProfile() {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  const favorites = useSelector((state)=>{
    return state.user;
  });

  const sessionUser = useSelector(state => state.session.user)
  const { id } = useParams();
  const trainerLookUpId = Number(id);
  const userId = Number(sessionUser.id);
  console.log(userId, trainerLookUpId )
  const trainerDetails = trainers.filter((train) => train.id === trainerLookUpId);
  const singleTrainer = trainerDetails[0];
  const favoritesForCurrentUser = singleTrainer.Favorites;
  // const userLikedThisTrainer = favoritesForCurrentUser.filter(fav => fav.userId === sessionUser.id)
  
  // console.log(userLikedThisTrainer)
  console.log(favorites)
  let trainerIsFavorited = favorites.filter((fav)=> Number(fav.trainerId) === trainerLookUpId)
    // console.log(trainerIsFavorited)
  const favorite = (e)=>{
    e.preventDefault();
    if(trainerIsFavorited.length > 0){
      console.log('unlike')
      dispatch(removeFavoriteTrainer(userId,trainerLookUpId))
    }else{
      console.log('like')
      dispatch(newFavoriteTrainer(userId,trainerLookUpId))
    }
    // dispatch(getAllTrainers())
  }
  useEffect(()=>{
    dispatch(getUserFavorites(sessionUser.id))
  },[dispatch])
  // singleTrainer.Reviews.forEach((review) => console.log(review.review));
  return (
    <div>
      <h1>Name: {trainerDetails[0].name}<button onClick={favorite}>Favorite</button></h1>
      <h2>{singleTrainer.certifications}</h2>
      <h2>reviews</h2>
      {singleTrainer.Reviews.map((review) => (
        <h2>{review.review}</h2>
      ))}
    </div>
  );
}

export default TrainerProfile;
