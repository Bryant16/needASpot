import TrainerDetails from "../TrainerDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrainers } from "../../store/trainer";

function TrainerDisplay() {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => {
    return state.trainer.list.map((trainerId) => state.trainer[trainerId]);
  });
  useEffect(() => {
    dispatch(getAllTrainers());
  }, []);

  // trainers.map(train=> console.log(train))
  return (
    <div>
      <h2>Strength Training</h2>
      <div className="trainerCards">
          {trainers.map((trainer) => {
            return <TrainerDetails name={trainer.name} style={trainer.style} />;
          })}
      </div>
    </div>
  );
}

export default TrainerDisplay;
