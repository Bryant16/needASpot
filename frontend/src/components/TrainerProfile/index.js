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
  
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  const favorites = useSelector((state)=>{
    return state.user;
  });
  
  const trainerLookUpId = Number(id);
 
  let trainerIsFavorited =  favorites.filter((fav)=> Number(fav.trainerId) === trainerLookUpId)
    console.log('fav',trainerIsFavorited.length)
  const [activeButton, setActiveButton] = useState();
  // console.log(activeButton)
  
  const sessionUser = useSelector(state => state.session.user)
  const userId = Number(sessionUser.id);
  
  const trainerDetails = trainers.filter((train) => train.id === trainerLookUpId);
  const singleTrainer = trainerDetails[0];

  const trainerReviews = ()=>{
    let stars = 0;
    let count = 0
    if(singleTrainer){

    
    singleTrainer.Reviews.forEach((review)=>{
      stars += review.stars
      count += 1;
    });
  }
    return( 
     { 
      stars: Math.floor(stars / count),
      reviews: count
      }
      )
  };
  
  let starsReviews = trainerReviews();
  

  
  


  const favorite = (e)=>{
    e.preventDefault();
    if(trainerIsFavorited.length > 0){
      setActiveButton(false)
      dispatch(removeFavoriteTrainer(userId,trainerLookUpId))
    }else{
      setActiveButton(true)
      dispatch(newFavoriteTrainer(userId,trainerLookUpId))
    }
  }


  useEffect(()=>{
    dispatch(getUserFavorites(sessionUser.id));
    dispatch(getAllTrainers())
    
    console.log('active',activeButton)
  },[dispatch])

  return ( favorites.length > 0 && trainers.length >0 &&
    <div className='background'>
      
      <div className='trainerPicture' style={{backgroundImage: `url(${singleTrainer.profileUrl})`}}></div>
      <div className='trainerContainer'>
      <h1>{singleTrainer.name}
      <button className={activeButton ? `favoriteButton` : 'unfavorite'} onClick={favorite}><i class='far fa-heart'></i></button>
      </h1>
      <h3>{starsReviews.stars}<i class="fas fa-star"></i>{starsReviews.reviews} reviews</h3>
      <div className='certs'>
      <ul>certifications:{singleTrainer.certifications.replace('{','').replace('}', '').replace(/"/gi,'').split(',').map(cert=><li>{cert}</li>)}</ul>
      </div>
      <div className='education'>
      <p>Education:</p>
      <p>{singleTrainer.education}</p>
      </div>
      <div className='reviewContainer'>
      <h2>What people are saying</h2>
      {singleTrainer.Reviews.map((review) => (
        <div className='review'>
          <div>
          <h4 className='reviewItems'>picture</h4>
          </div>
          <div>
          <h4 className='reviewItems'><i class="fas fa-star"/>{review.stars}</h4> 
          <p className='reviewItems'>overall {review.overall} knowledge {review.knowledge} Prof {review.profesionalism}Likely to Refer{review.refer}</p>
          <p className='reviewItems'>{review.review}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
      </div>

  );
}

export default TrainerProfile;
