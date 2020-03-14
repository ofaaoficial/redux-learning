import { combineReducers } from "redux";
import {game_shop} from './gameShopReducer';
import {buscador} from './buscadorReducer';

export const rootReducers = combineReducers({
    game_shop,
    buscador
});

