import { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";

function TrainerDetails({ id, name, location, review }) {
 
  return (
    <ul>
      <NavLink to={`/trainer/${id}`}>
      <img className="trainerimage" src={trainer} alt="" />
      <li>{name}</li>
      <li>{location}</li>
      </NavLink>
    </ul>
  );
}

export default TrainerDetails;
