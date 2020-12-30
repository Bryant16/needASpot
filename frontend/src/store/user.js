import {fetch} from './csrf';

const USERFAVORITES = '/user/USERFAVORITES'
const NEWFAVORITE = '/user/NEWFAVORITE';

const newFavorite = ()=>{
    return {
        type: NEWFAVORITE,
    }
}
const userFavorites = (favorites) =>{
    return {
        type: USERFAVORITES,
        favorites
    }
}

export const newFavorite = (userId, trainId) =>{
    return async (dispatch)=>{
        const res = await fetch(`/api/users/${userid}/trainer/${trainId}`);
        
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
        default:
            return state;
    }
}

export default userReducer;