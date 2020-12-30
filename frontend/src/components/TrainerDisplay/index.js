import TrainerDetails from "../TrainerDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrainers, getReviewsForATrainer } from "../../store/trainer";

function TrainerDisplay() {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  useEffect(() => {
    dispatch(getAllTrainers());
  }, []);
 
  return (
    <div>
    <h2>Strength Training</h2>
    <div className="trainerCards">
      {trainers.slice(0,8).map(train=>{
        return(<TrainerDetails key={train.id} name={train.name} location={train.address}/>)
      })}
    </div>
    </div>
  );
}

export default TrainerDisplay;
