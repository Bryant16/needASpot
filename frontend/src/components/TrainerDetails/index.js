import { useEffect } from "react";
import "./TrainerDetails.css";
import trainer from "../../images/trainer.png";

function TrainerDetails({ name, style }) {
  return (
    <ul>
      <img className="trainerimage" src={trainer} alt="" />
      <li>{name}</li>
      {/* <li>{id}</li> */}
      <li>{style}</li>
    </ul>
  );
}

export default TrainerDetails;
