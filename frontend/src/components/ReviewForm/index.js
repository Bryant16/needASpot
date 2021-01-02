import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { getAllTrainers, addReview } from '../../store/trainer';
import './ReviewForm.css';

const ReviewForm = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [stars, setStars] = useState(5);
    const [starCheck, setStarCheck] = useState(false);
    const [overall, setOverall] = useState(5);
    const [knowledge, setKnowledge] = useState(5);
    const [prof, setProf] = useState(5);
    const [refer, setRefer] = useState(5);
    const [review, setReview] = useState('');
    const {trainerId} = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const trainer = useSelector(state => state.trainer )
    const trainerName = trainer.filter(train=> train.id.toString() === trainerId.toString())
    const updateStars = (num) => setStars(num);
    const updateOverall = (e) => setOverall(e.target.value);
    const updateKnowledge = (e) => setKnowledge(e.target.value);
    const updateProf = (e) => setProf(e.target.value);
    const updateRefer = (e) => setRefer(e.target.value);
    const updateReview = (e) => setReview(e.target.value);
    useEffect(()=>{
        dispatch(getAllTrainers())
    },[dispatch]);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const newReview = {
            stars,
            overall,
            knowledge,
            prof,
            refer,
            review
        };
        if(newReview){
        // console.log(newReview);
        let userId = sessionUser.id;
        // let trainerId = trainerId;
        // console.log('trainer id', trainerId, 'userId',userId )
        dispatch(addReview(newReview, trainerId, userId ))
        // console.log(res.data)
        // dispatch(getAllTrainers())
        }
        setReview('');
        history.push(`/trainer/${trainerId}`)
    };
    
    console.log(stars)
    return (
        trainer.length > 0 &&
        <div className='reviewContainer'>
        <h1>{sessionUser.username}, how was your experience with {trainerName[0].name}</h1>
        <form className='reviewForm'>
            <div>
                <label>stars
                <input type='radio'     onChange={updateStars} />
                <input type='radio'     onChange={updateStars}/>
                <input type='radio'     onChange={updateStars}/>
                <input type='radio'     onChange={updateStars}/>
                <input type='radio'     onChange={updateStars}/>
                </label>
                {/* <input type='radio' name='star'><label><i class='far fa-star'></i></label></input> */}
            {/* <label>stars</label>
            <select onChange={updateStars}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
            </select> */}
            </div>
            <div>
            <label>Overall</label>
            <select onChange={updateOverall} >
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        </div> 
        <div>
            <label>Knowledge</label>
            <select onChange={updateKnowledge}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        </div>
        <div>
            <label>Profesionalism</label>
            <select onChange={updateProf}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        </div>
        <div>
            <label>Likely to Refer</label>
            <select onChange={updateRefer}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        </div>
        <textarea placeholder='tell us about your experience' value={review} onChange={updateReview}/>
        <button onClick={handleSubmit}>Submit Review</button>
        </form>
       </div>
    )
};

export default ReviewForm;