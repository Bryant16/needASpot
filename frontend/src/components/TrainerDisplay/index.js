import TrainerDetails from "../TrainerDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrainers, getReviewsForATrainer } from "../../store/trainer";

function TrainerDisplay({category}) {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  useEffect(() => {
    dispatch(getAllTrainers());
  }, []);
//  console.log(trainers.map(train=> train.specialities.includes('Strength')))
  return (
    <div>
    <h2>{category}</h2>
    <div className="trainerCards">
      {trainers.slice(0,8).map(train=>{
        return(<TrainerDetails key={train.id} id={train.id} name={train.name} location={train.address}/>)
      })}
    </div>
    </div>
  );
}

export default TrainerDisplay;
