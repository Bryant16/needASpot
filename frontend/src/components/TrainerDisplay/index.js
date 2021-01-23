import TrainerDetails from "../TrainerDetails";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';
import './TrainerDisplay.css';
import { useEffect } from "react";
import { getAllTrainers } from "../../store/trainer";
import { combineReducers } from "redux";
function TrainerDisplay({category}) {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  // .slice(0,8)
//  console.log(trainers.map(train=> train.specialities.includes('Strength')))
useEffect(()=>{
  dispatch(getAllTrainers())
  
},[dispatch])
  
  return (
    <div className='trainerCategoriesContainer'>
    <h2 className='trainerCategories'>{category}</h2>
    <div className="trainerCards">
      {trainers.map(train=>{
        return(
        <NavLink  to={`/trainer/${train.id}`}>  
        <TrainerDetails key={train.id} id={train.id} name={train.name} location={train.address} reviews={train.Reviews} image={train.profileUrl || ''}/>
        </NavLink> 
        )
      })}
    </div>
    </div>
  );
}

export default TrainerDisplay;
