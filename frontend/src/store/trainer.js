import {fetch} from './csrf';

const SINGLETRAINER = '/trainers/SINGLETRAINER';
const ALL_TRAINERS = '/trainers/ALL_TRAINERS';
const REVIEWS_FOR_A_TRAINER = '/trainers/REVIEWS_FOR_A_TRAINER';

const singleTrainer = (trainer, reviews) =>{
    return {
        type: SINGLETRAINER,
        trainer,
        reviews
    }
}
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
export const getSingleTrainer = (id) => {
    return async (dispatch) =>{
        const response = await fetch(`/api/trainer/${id}`);
       dispatch(singleTrainer(response.trainers))
    }
}
export const getAllTrainers = ()=> {
    return async (dispatch) =>{
        const response = await fetch('/api/trainer');
        // console.log( await response.json())
        // console.log(response.data)
        // const listTrainers = await response.json();
        dispatch(
            allTrainers(response.data.trainers)
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
        case SINGLETRAINER:{
            let singleTrainerState={};
            singleTrainerState[action.trainer.id] = action.trainer;
            singleTrainerState[action.reviews] = action.reviews
            return{
                ...state,
                singleTrainerState
            }
        }
        default:
            return state;
    }
}

export default trainerReducer;