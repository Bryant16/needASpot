import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllTrainers, addReview } from "../../store/trainer";
import "./ReviewForm.css";
import RadioSelector from "./RadioSelector";

const ReviewForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [stars, setStars] = useState(5);
  const [overall, setOverall] = useState(5);
  const [knowledge, setKnowledge] = useState(5);
  const [prof, setProf] = useState(5);
  const [refer, setRefer] = useState(5);
  const [review, setReview] = useState("");
  const { trainerId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const trainer = useSelector((state) => state.trainer);
  const trainerName = trainer.filter(
    (train) => train.id.toString() === trainerId.toString()
  );

  const updateReview = (e) => setReview(e.target.value);
  useEffect(() => {
    dispatch(getAllTrainers());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      stars,
      overall,
      knowledge,
      prof,
      refer,
      review,
    };
    if (newReview) {
      // console.log(newReview);
      let userId = sessionUser.id;
      // let trainerId = trainerId;
      // console.log('trainer id', trainerId, 'userId',userId )
      dispatch(addReview(newReview, trainerId, userId));
      // console.log(res.data)
      // dispatch(getAllTrainers())
    }
    setReview("");
    history.push(`/trainer/${trainerId}`);
  };

  console.log(stars);
  return (
    trainer.length > 0 && (
      <div className="reviewContainers">
        <h1>
          {sessionUser.username.toUpperCase()},
          <p>How was your experience with {trainerName[0].name}</p>
        </h1>

        <div className="reviewContainers">
          <form className="reviewForm">
            <RadioSelector
              label="Stars"
              count={5}
              checked={stars}
              onChange={setStars}
            />
            <RadioSelector
              label="Overall"
              count={5}
              checked={overall}
              onChange={setOverall}
            />
            <RadioSelector
              label="Knowledge"
              count={5}
              checked={knowledge}
              onChange={setKnowledge}
            />
            <RadioSelector
              label="Profesionalism"
              count={5}
              checked={prof}
              onChange={setProf}
            />
            <RadioSelector
              label="Likely to Refer"
              count={5}
              checked={refer}
              onChange={setRefer}
            />
            <textarea
              placeholder="tell us about your experience"
              value={review}
              onChange={updateReview}
            />
            <button onClick={handleSubmit}>Submit Review</button>
          </form>
        </div>
      </div>
    )
  );
};

export default ReviewForm;
