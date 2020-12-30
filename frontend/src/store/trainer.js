import {fetch} from './csrf';

const SINGLETRAINER = '/trainers/SINGLETRAINER';
const ALL_TRAINERS = '/trainers/ALL_TRAINERS';
const REVIEWS_FOR_A_TRAINER = '/trainers/REVIEWS_FOR_A_TRAINER';


const allTrainers = (listOfTrainers) => ({
    type: ALL_TRAINERS,
    listOfTrainers,
  });
  
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
        default:
            return state;
    }
}

export default trainerReducer;