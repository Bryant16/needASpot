import {fetch} from './csrf';

const USERFAVORITES = '/user/USERFAVORITES'
const NEWFAVORITE = '/user/NEWFAVORITE';

const newFavorite = (newTrainerFavorite)=>{
    return {
        type: NEWFAVORITE,
        favorite:newTrainerFavorite
    }
}
const userFavorites = (favorites) =>{
    return {
        type: USERFAVORITES,
        favorites
    }
}

export const newFavoriteTrainer = (userId, trainId) =>{
    return async (dispatch)=>{
        const res = await fetch(`/api/favorites/users/${userId}/trainer/${trainId}`);
        console.log(res.data)
        dispatch(newFavorite(res.data.createFav))
    }
}
export const getUserFavorites = (id) => {
    return async (dispatch) =>{
        const res = await fetch(`/api/users/${id}`);
        // console.log(res.data.favorites)
        dispatch(userFavorites(res.data.favorites))
    }
}

let initalState = [];

const userReducer = (state= initalState, action)=>{
    let newState;
    switch(action.type) {
        case USERFAVORITES: {
            newState = action.favorites
            return newState;
        }
        case NEWFAVORITE:{
            return [...state, action.favorite]
        }
        default:
            return state;
    }
}

export default userReducer;