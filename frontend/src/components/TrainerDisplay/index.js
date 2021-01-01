import TrainerDetails from "../TrainerDetails";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';
import './TrainerDisplay.css';
function TrainerDisplay({category}) {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  
//  console.log(trainers.map(train=> train.specialities.includes('Strength')))
  return (
    <div>
    <h2>{category}</h2>
    <div className="trainerCards">
      {trainers.slice(0,8).map(train=>{
        return(
        <NavLink  to={`/trainer/${train.id}`}>  
        <TrainerDetails key={train.id} id={train.id} name={train.name} location={train.address} image={train.profileUrl || ''}/>
        </NavLink> 
        )
      })}
    </div>
    </div>
  );
}

export default TrainerDisplay;
