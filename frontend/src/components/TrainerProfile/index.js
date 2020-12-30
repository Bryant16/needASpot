import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TrainerProfile() {
  const trainers = useSelector((state) => {
    return state.trainer;
  });
  const sessionUser = useSelector(state => state.session.user)
  const { id } = useParams();
  const lookUpId = Number(id);

  const trainerDetails = trainers.filter((train) => train.id === lookUpId);
  const singleTrainer = trainerDetails[0];
  const favorites = singleTrainer.Favorites;
  const userLikedThisTrainer = favorites.filter(fav => fav.userId === sessionUser.id)
  console.log(userLikedThisTrainer)
  console.log(favorites)
  const favorite = (e)=>{
    e.preventDefault();
    if(userLikedThisTrainer.length > 0){
      console.log('works')
    }else{
      console.log('nope')
    }
  }
  // singleTrainer.Reviews.forEach((review) => console.log(review.review));
  return (
    <div>
      <h1>Name: {trainerDetails[0].name}<button onClick={favorite}>Favorite</button></h1>
      <h2>{singleTrainer.certifications}</h2>
      <h2>reviews</h2>
      {singleTrainer.Reviews.map((review) => (
        <h2>{review.review}</h2>
      ))}
    </div>
  );
}

export default TrainerProfile;
