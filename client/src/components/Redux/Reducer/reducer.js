import { ALL_RECETS, ONE_RECET, CLEAN_RECET, NAME_RECET, ORDEN_DIETS, ORDEN_ALFABET, ORDEN_HEALTH, GET_DIETS, ADD_RECIPE, MY_RECIPE, DELETE_RECIPE } from "../Actions/actions";

const initialState = {
    allRecets: [],
    oneRecet: [],
    filterRecets: [],
    diets: [],
    miReceta: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_RECETS: return {...state, allRecets: action.payload, filterRecets: action.payload};

        case ONE_RECET: return {...state, oneRecet: [...action.payload]};

        case CLEAN_RECET: return {...state, oneRecet: [], miReceta: []};

        case NAME_RECET: return {...state, filterRecets: [...action.payload]};

        case ORDEN_DIETS: 
                            if(action.payload !== 'todos'){
                                return {...state, filterRecets: state.filterRecets.filter(recet => recet.diets.includes(action.payload))};
                            }
                            return {...state, filterRecets: state.allRecets};

        case ORDEN_ALFABET: 
                            if(action.payload === 'A-Z'){
                                return {...state, filterRecets: state.filterRecets.sort((a,b) => a.title.localeCompare(b.title))};
                            }
                            return {...state, filterRecets: state.filterRecets.sort((a,b) => -a.title.localeCompare(b.title))};

        case ORDEN_HEALTH: 
                            if(action.payload === '+ Saludable'){
                                return {...state, filterRecets: state.filterRecets.sort((a,b) => b.healthScore - a.healthScore)}
                            }
                            return {...state, filterRecets: state.filterRecets.sort((a,b) => a.healthScore - b.healthScore)};

        case GET_DIETS: return {...state, diets: action.payload};
                                
        case ADD_RECIPE: return {...state, miReceta: [...state.miReceta, action.payload]};

        case MY_RECIPE: return {...state, miReceta: [...action.payload]};

        case DELETE_RECIPE: return {...state};

        default: return {...state};
    }
};

export default reducer;


