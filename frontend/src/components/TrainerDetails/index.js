import { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";
import {getAllTrainers} from '../../store/trainer';

function TrainerDetails({ id, name, location, image }) {
  
  return (
    <ul>
      <NavLink to={`/trainer/${id}`}>
      <img className="trainerimage" src={image} alt="" />
      <li>{name}</li>
      <li>{location}</li>
      </NavLink>
    </ul>
  );
}

export default TrainerDetails;
