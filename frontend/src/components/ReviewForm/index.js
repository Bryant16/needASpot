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
        <div className='reviewContainers'>
        <h1>{sessionUser.username}, how was your experience with {trainerName[0].name}</h1>
        <form className='reviewForm'>
            <div className='inputContainer'>
                <label>stars
                </label>
                <div>
                <input type='radio' value={1} checked={stars === '1'}onChange={e=>setStars(e.target.value)} />
                <input type='radio' value={2} checked={stars === '2'}onChange={e=>setStars(e.target.value)}/>
                <input type='radio' value={3} checked={stars === '3'}onChange={e=>setStars(e.target.value)}/>
                <input type='radio' value={4} checked={stars === '4'}onChange={e=>setStars(e.target.value)}/>
                <input type='radio' value={5} checked={stars === '5'}onChange={e=>setStars(e.target.value)}/>
                </div>
            </div>
            <div className='inputContainer'>
                <label>Overall
                </label>
                <div>
                <input type='radio' value={1} checked={overall === '1'}onChange={e=>setOverall(e.target.value)} />
                <input type='radio' value={2} checked={overall === '2'}onChange={e=>setOverall(e.target.value)}/>
                <input type='radio' value={3} checked={overall === '3'}onChange={e=>setOverall(e.target.value)}/>
                <input type='radio' value={4} checked={overall === '4'}onChange={e=>setOverall(e.target.value)}/>
                <input type='radio' value={5} checked={overall === '5'}onChange={e=>setOverall(e.target.value)}/>
                </div>
            </div>
            <div className='inputContainer'>
                <label>Knowledge
                </label>
                <div>
                <input type='radio' value={1} checked={knowledge === '1'}onChange={e=>setKnowledge(e.target.value)} />
                <input type='radio' value={2} checked={knowledge === '2'}onChange={e=>setKnowledge(e.target.value)}/>
                <input type='radio' value={3} checked={knowledge === '3'}onChange={e=>setKnowledge(e.target.value)}/>
                <input type='radio' value={4} checked={knowledge === '4'}onChange={e=>setKnowledge(e.target.value)}/>
                <input type='radio' value={5} checked={knowledge === '5'}onChange={e=>setKnowledge(e.target.value)}/>
                </div>
            </div>
            <div className='inputContainer'>
                <label>Profesionalism
                </label>
                <div>
                <input type='radio' value={1} checked={prof === '1'}onChange={e=>setProf(e.target.value)} />
                <input type='radio' value={2} checked={prof === '2'}onChange={e=>setProf(e.target.value)}/>
                <input type='radio' value={3} checked={prof === '3'}onChange={e=>setProf(e.target.value)}/>
                <input type='radio' value={4} checked={prof === '4'}onChange={e=>setProf(e.target.value)}/>
                <input type='radio' value={5} checked={prof === '5'}onChange={e=>setProf(e.target.value)}/>
                </div>
            </div>
            <div className='inputContainer'>
                <label>Likely to Refer
                </label>
                <div>
                <input type='radio' value={1} checked={refer === '1'}onChange={e=>setRefer(e.target.value)} />
                <input type='radio' value={2} checked={refer === '2'}onChange={e=>setRefer(e.target.value)}/>
                <input type='radio' value={3} checked={refer === '3'}onChange={e=>setRefer(e.target.value)}/>
                <input type='radio' value={4} checked={refer === '4'}onChange={e=>setRefer(e.target.value)}/>
                <input type='radio' value={5} checked={refer === '5'}onChange={e=>setRefer(e.target.value)}/>
                </div>
            </div>
        <textarea placeholder='tell us about your experience' value={review} onChange={updateReview}/>
        <button onClick={handleSubmit}>Submit Review</button>
        </form>
       </div>
    )
};

export default ReviewForm;