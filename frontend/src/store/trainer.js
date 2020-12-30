const LOAD = '/trainers/LOAD';
const REVIEWS_FOR_A_TRAINER = '/trainers/REVIEWS_FOR_A_TRAINER';

const load = list => ({
    type: LOAD,
    list,
  });
  
const trainerReviews = (reviews) =>{
    return {
        type: REVIEWS_FOR_A_TRAINER,
        reviews
    }
}
export const getAllTrainers = () =>async(dispatch)=>{
    const res = await fetch('/api/trainer');
    
    
    if(res.ok){
        const list = await res.json();
        dispatch(load(list));
    }
};

export const getReviewsForATrainer = (id)=> async(dispatch)=>{
    const res = await fetch(`/api/trainer/reviews/${id}`);

    if(res.ok){
        const reviews = await res.json();
        dispatch(trainerReviews(reviews))
    }
};

const initalState = {
    list:[]
}
const sortList = (list) => {
    return list.sort((trainerA, trainerB) => {
      return trainerA.id - trainerB.id;
    }).map((trainer) => trainer.id);
  };

const trainerReducer = (state=initalState, action=[])=>{
    switch(action.type) {
        case LOAD: {
            const allTrainers = {};
            // console.log(action)
            action.list.forEach(trainer=> {
                allTrainers[trainer.id] = trainer;
            });
            return {
                ...allTrainers,
                ...state,
                list: sortList(action.list)
            }
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