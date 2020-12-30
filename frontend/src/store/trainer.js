// import {fetch} from './csrf';

const ALL_TRAINERS = '/trainers/ALL_TRAINERS';
const REVIEWS_FOR_A_TRAINER = '/trainers/REVIEWS_FOR_A_TRAINER';

const allTrainers = (listOfTrainers) => ({
    type: ALL_TRAINERS,
    listOfTrainers,
  });
  
// const trainerReviews = (reviews) =>{
//     return {
//         type: REVIEWS_FOR_A_TRAINER,
//         reviews
//     }
// }

export const getAllTrainers = ()=> {
    return async (dispatch) =>{
        const response = await fetch('/api/trainer');
        // console.log( await response.json())
        const listTrainers = await response.json();
        dispatch(
            allTrainers(listTrainers.trainers)
        )
    }
}


const initalState = [];

const trainerReducer = (state= initalState, action)=>{
    let newState;
    switch(action.type) {
        case ALL_TRAINERS: {
            newState = action.listOfTrainers
            return newState;
        }
        case REVIEWS_FOR_A_TRAINER:{
            return {
                ...state,
                reviews: action.reviews
            }
        }
        default:
            return state;
    }
}

export default trainerReducer;