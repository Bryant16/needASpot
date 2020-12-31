import {useState} from 'react';
import './ReviewForm.css';

const ReviewForm = () =>{

    return (
        <form className='reviewForm'> 
            <label>stars</label>
            <select className='reviewSelect'>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Overall</label>
            <select className='reviewSelect'>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Knowledge</label>
            <select className='reviewSelect'>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Profesionalism</label>
            <select >
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
            <label>Likely to Refer</label>
            <select className='reviewSelect'>
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>
        <textarea />
        <button>Submit Review</button>
        </form>
       
    )
};

export default ReviewForm;