// import { createStore } from "redux";
const {createStore, combineReducers} = require('redux');

// Actions
const buy_pokemon_action = (cantidad) => {
    return {
        type: 'BUY_POKEMON',
        payload: cantidad
    }
};

const return_pokemon_action = (cantidad) => {
    return {
        type: 'RETURN_POKEMON',
        payload: cantidad
    }
};

const buy_yoshi_action = (cantidad) => {
    return {
        type: 'BUY_YOSHI',
        payload: cantidad
    }
};

const return_yoshi_action = (cantidad) => {
    return {
        type: 'RETURN_YOSHI',
        payload: cantidad
    }
};

const buy_ps5_action = (cantidad) => {
    return {
        type: 'BUY_PS5',
        payload: cantidad
    }
};

// Reducer
const default_games_state = {
    pokemon: 10,
    yoshi: 10
};

const default_consoles_state = {
    ps5: 23,
    xbox_one: 34
};

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case 'BUY_POKEMON':
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            };
        case 'RETURN_POKEMON':
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            };
        case 'BUY_YOSHI':
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            };
        case 'RETURN_YOSHI':
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            };
        default:
            return state;
    }
};

const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case 'BUY_PS5': {
            return {
                ...state,
                ps5: state.ps5 - action.payload
            }
        }
        default:
            return state;
    }
};

// Unir stores
const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
});

// Store
const store = createStore(rootReducers);

console.log('Estado inicial', store.getState());

store.subscribe(() => {
    console.log('Cambio de estado', store.getState());
});

// store.dispatch(buy_pokemon_action(3));
// store.dispatch(return_pokemon_action(2));

// store.dispatch(buy_yoshi_action(5));
// store.dispatch(return_yoshi_action(2));

store.dispatch(buy_ps5_action(1));
