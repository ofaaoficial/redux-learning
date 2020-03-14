import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from "../actions/buscadorAccion";

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
};

export const buscador = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                error: '',
                pokemon: action.payload
            }
        case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}
