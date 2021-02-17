
import "./TrainerDetails.css";

function TrainerDetails({ id, name, location, image, reviews }) {
 
 
  const getStars = ()=>{
    let stars= 0
    let count = 0
    if(reviews.length > 0){
      reviews.forEach(review =>{
        stars += review.stars
        count ++
      })
    }
    return Math.floor(stars/count) || 0
  }

  return (
    <ul className='card'>
      <img className="trainerimage" src={image} alt="" />
      <li className='trainerName'>{name}</li>
      <li className='trainerReviews'>{getStars()} <i className="fas fa-star"></i> Reviews: {reviews.length}</li>
      <li>{location}</li>
    </ul>
  );
}

export default TrainerDetails;
