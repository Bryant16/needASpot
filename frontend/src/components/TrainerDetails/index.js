import { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";
import {getAllTrainers} from '../../store/trainer';

function TrainerDetails({ id, name, location, image }) {
  
  return (
    <ul class='card'>
      {/* <NavLink to={`/trainer/${id}`}> */}
      <img className="trainerimage" src={image} alt="" />
      <li className='trainerName'>{name}</li>
      <li className='trainerReviews'><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>10 reviews</li>
      <li>{location}</li>
      {/* </NavLink> */}
    </ul>
  );
}

export default TrainerDetails;
