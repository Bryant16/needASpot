import { useEffect } from "react";
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";

function TrainerDetails({ name, location, review }) {
  
  return (
    <ul>
      <img className="trainerimage" src={trainer} alt="" />
      <li>{name}</li>
      <li>{location}</li>
      <li>{review ? review[0] : false}</li>
    </ul>
  );
}

export default TrainerDetails;
