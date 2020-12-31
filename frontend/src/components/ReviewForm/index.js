import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getAllTrainers } from '../../store/trainer';
import './ReviewForm.css';

const ReviewForm = () =>{
    const dispatch = useDispatch();
    const [stars, setStars] = useState(5);
    const [overall, setOverall] = useState(5);
    const [knowledge, setKnowledge] = useState(5);
    const [prof, setProf] = useState(5);
    const [refer, setRefer] = useState(5);
    const [review, setReview] = useState('');
    const {id} = useParams();
    const sessionUser = useSelector(state => state.session.user)

    const updateStars = (e) => setStars(e.target.value);
    const updateOverall = (e) => setOverall(e.target.value);
    const updateKnowledge = (e) => setKnowledge(e.target.value);
    const updateProf = (e) => setProf(e.target.value);
    const updateRefer = (e) => setRefer(e.target.value);
    const updateReview = (e) => setReview(e.target.value);

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
        console.log(newReview);
        console.log('trainer id', id, 'userId',sessionUser.id )
        // dispatch(createAReview(newReview))
        await fetch('/api/reviews',{
            method: 'POST',
            body: JSON.stringify({newReview})
        })
        dispatch(getAllTrainers())
        }
        setReview('');
    };

    return (
        <form className='reviewForm'> 
            <label>stars</label>
            <select onChange={updateStars}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Overall</label>
            <select onChange={updateOverall} >
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Knowledge</label>
            <select onChange={updateKnowledge}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Profesionalism</label>
            <select onChange={updateProf}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Likely to Refer</label>
            <select onChange={updateRefer}>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        <textarea value={review} onChange={updateReview}/>
        <button onClick={handleSubmit}>Submit Review</button>
        </form>
       
    )
};

export default ReviewForm;