import {fetch} from './csrf';

const USERFAVORITES = '/user/USERFAVORITES'

const userFavorites = (favorites) =>{
    return {
        type: USERFAVORITES,
        favorites
    }
}

export const getUser = (id) => {
    return async (dispatch) =>{
        const res = await fetch(`/api/users/${id}`);
        dispatch(userFavorites(res.data.user))
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