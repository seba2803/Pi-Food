import axios from 'axios';
import URL_API from './info';
export const ALL_RECETS = 'ALL_RECETS';
export const ONE_RECET = 'ONE_RECET';
export const CLEAN_RECET = 'CLEAN_RECET';
export const NAME_RECET = 'NAME_RECET';
export const ORDEN_DIETS = 'ORDEN_DIETS';
export const ORDEN_ALFABET = 'ORDEN_ALFABET';
export const ORDEN_HEALTH = 'ORDEN_HEALTH';
export const GET_DIETS = 'GET_DIETS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const MY_RECIPE = 'MY_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const allRecets = () => {
    return async(dispatch) => {
        try {
            
            const {data} = await axios(`${URL_API}/allRecipes`);

            return dispatch({
                type: ALL_RECETS,
                payload: data,
             });

        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const oneRecet = (id) => {
    return async(dispatch) => {
        try {
            
            const {data} = await axios(`${URL_API}/recipes/${id}`);

            return dispatch({type: ONE_RECET, payload: data});

        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const recetName = (nombre) => {
    return async(dispatch) => {
        try {

            const {data} = await axios(`${URL_API}/recipes/name?nombre=${nombre}`);
    
            return dispatch({type: NAME_RECET, payload: data});
            
        } catch (error) {
            alert(`La receta con el nombre: ${nombre} no existe`)
        }
    };
};

export const getDiets = () => {
    return async(dispatch) => {
        try {
            const {data} = await axios(`${URL_API}/diets`);
    
            return dispatch({type: GET_DIETS, payload: data});
            
        } catch (error) {
            throw Error(error.message);
        }

    };
};

export const addRecipe = (recipe) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.post(`${URL_API}/recipes`, recipe);
    
            return dispatch({type: ADD_RECIPE, payload: data});
            
        } catch (error) {
            throw Error(error.message);
        }

    };
};

export const myRecets = () => {
    return async (dispatch) => {
        try {
            
            const {data} = await axios(`${URL_API}/miReceta`);

            return dispatch({type: MY_RECIPE, payload: data});

        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const deleteRecets = (id) => {
    return async(dispatch) => {
        try {
            const {data} = axios.delete(`${URL_API}/delete/${id}`);

            return dispatch({type: DELETE_RECIPE});

        } catch (error) {
            throw Error(error.message);
        }
    }
}

export const ordenDietas = (name) => {
    return {type: ORDEN_DIETS, payload: name};
};

export const ordenAlfa = (opc) => {
    return {type: ORDEN_ALFABET, payload: opc};
};

export const ordenHealth = (opc) => {
    return {type: ORDEN_HEALTH, payload: opc};
};

export const cleanRecet = () => {
    return {type: CLEAN_RECET};
};