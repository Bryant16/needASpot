const LOAD = '/trainers/LOAD';

const load = list => ({
    type: LOAD,
    list,
  });

export const getAllTrainers = () =>async(dispatch)=>{
    const res = await fetch('/api/trainer');
    console.log(res)
    
    if(res.ok){
        const list = await res.json();
        dispatch(load(list));
    }
}

const initalState = {
    list:[]
}
const sortList = (list) => {
    return list.sort((pokemonA, pokemonB) => {
      return pokemonA.id - pokemonB.id;
    }).map((pokemon) => pokemon.id);
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
        default:
            return state;
    }
}

export default trainerReducer;