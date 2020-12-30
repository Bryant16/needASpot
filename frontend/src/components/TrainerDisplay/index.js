import TrainerDetails from "../TrainerDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrainers, getReviewsForATrainer } from "../../store/trainer";

function TrainerDisplay() {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer.list.map((trainerId) => state.trainer[trainerId]);
  });
  useEffect(() => {
    dispatch(getAllTrainers());
  }, []);
  // console.log(trainers[0])
  // let reviews = trainers[0];
  // console.log(reviews.Reviews)
  // trainers.map(train=> console.log(train))
  return (
    <div>
      <h2>Strength Training</h2>
      <div className="trainerCards">
          {trainers.slice(0,8).map((trainer) => {
            return <TrainerDetails key={trainer.id} name={trainer.name} location={trainer.address} review={trainer.Reviews} />;
          })}
      </div>
    </div>
  );
}

export default TrainerDisplay;
