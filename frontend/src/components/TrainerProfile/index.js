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
    console.log('fav',trainerIsFavorited.length>0)
  const [activeButton, setActiveButton] = useState(trainerIsFavorited.length > 0);
  
  const sessionUser = useSelector(state => state.session.user)
  const userId = Number(sessionUser.id);
  
  const trainerDetails = trainers.filter((train) => train.id === trainerLookUpId);
  const singleTrainer = trainerDetails[0];
  // const certs = singleTrainer.certifications.replace('{','').replace('}', '').replace('"','')
  
  // console.log(certs)
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
  // console.log(singleTrainer)
  return (trainers.length > 0  && favorites.length > 0 &&
    <div className='background'>
      <div className='trainerContainer'>
      <h1>{singleTrainer.name}
      <button className={activeButton ? `favoriteButton` : null} onClick={favorite}><i class='far fa-heart'></i></button>
      </h1>
      <ul>certifications: {singleTrainer.certifications.replace('{','').replace('}', '').replace(/"/gi,'').split(',').map(cert=><li>{cert}</li>)}</ul>
      <p>education:</p>
      <p>{singleTrainer.education}</p>
      <div className='reviewContainer'>
      <h2>What people are saying</h2>
      {singleTrainer.Reviews.map((review) => (
        <div className='review'>
        <h4>stars {review.stars} overall {review.overall} knowledge {review.knowledge} Prof {review.profesionalism}Likely to Refer{review.refer}</h4>
        <p>{console.log(review)}{review.review}</p>
        </div>
      ))}
      </div>
      </div>
      </div>

  );
}

export default TrainerProfile;
