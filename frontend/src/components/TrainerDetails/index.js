import { useEffect } from "react";
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";
import {getAllTrainers} from '../../store/trainer';

function TrainerDetails({ id, name, location, image, reviews }) {
 
 
  const getStars = ()=>{
    let stars= 0
    let count = 0
    if(reviews.length > 0){
      reviews.forEach(review =>{
        stars += review.stars
        count ++
      })
    }
    return Math.floor(stars/count) || 0
  }

  return (
    <ul class='card'>
      {/* <NavLink to={`/trainer/${id}`}> */}
      <img className="trainerimage" src={image} alt="" />
      <li className='trainerName'>{name}</li>
      <li className='trainerReviews'>{getStars()} <i class="fas fa-star"></i> Reviews: {reviews.length}</li>
      <li>{location}</li>
      {/* </NavLink> */}
    </ul>
  );
}

export default TrainerDetails;
