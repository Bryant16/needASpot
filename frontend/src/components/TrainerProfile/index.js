import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TrainerProfile() {
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  const { id } = useParams();
  const lookUpId = Number(id);

  const trainerDetails = trainers.filter((train) => train.id === lookUpId);
  const singleTrainer = trainerDetails[0];
  singleTrainer.Reviews.forEach((review) => console.log(review.review));
  return (
    <div>
      <h1>Name: {trainerDetails[0].name}<button>Favorite</button></h1>
      <h2>{singleTrainer.certifications}</h2>
      <h2>reviews</h2>
      {singleTrainer.Reviews.map((review) => (
        <h2>{review.review}</h2>
      ))}
    </div>
  );
}

export default TrainerProfile;
