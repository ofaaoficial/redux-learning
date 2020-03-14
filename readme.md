
# Redux
![Redux ciclo](imgs/redux.png)
Es un manejador de estados para datos en aplicaciones JavaScript, ayuda a gestionar datos de aplicaciones que se comportan de manera cosistente, corren en distintos ambientes (cliente, servidor y nativo).

* Se puede utilizar con React o cualquier otra librería de vistas.
* Todo el estado de la aplicacion esta almacenado en un unico arbol dentro de un único `store`.
* La unica forma de cambiar el arbol de estado es emitiendo una `acción`, un objeto describiendo que ocurre.
* Para especificar como las acciones transforman el arbol de estado usas `reducers`.

## Reducers
Para especificar como el árbol de estado es transformado por las acciones, se utilizan reducers puros.

Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

Los reducers son funciones puras que toman el estado anterior y una acción, y devuelven un nuevo estado. Recuerda devolver un nuevo objeto de estado en vez de modificar el anterior. Puedes empezar con un único reducer, y mientras tu aplicación crece, dividirlo en varios reducers pequeños que manejan partes específicas del árbol de estado. Ya que los reducers son funciones puras, puedes controlar el orden en que se ejecutan, pasarle datos adicionales, o incluso hacer reducers reusables para tareas comunes como paginación.

```javascript
// Se inicializa el estado.
const initialState = {
    loading: false,
    pokemon: [],
    error: ''
};

// Se crea el reducer y se exporta.
export const buscador = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON_REQUEST': 
            return {
                ...state,
                loading: true
            }
        case 'FETCH_POKEMON_SUCCESS':
            return {
                loading: false,
                error: '',
                pokemon: action.payload
            }
        case 'FETCH_POKEMON_FAILURE':
            return {
                loading: false,
                error: "No se encuentra ese pokemon.",
                pokemon: ''
            }
        default: 
            return state;
    }
}
```
Puede ser un unico reducer o tambien varios, pero se deben combinar con la función `combineReducers`.

```javascript
import {combineReducers} from "redux";
import {game_shop} from './gameShopReducer';
import {buscador} from './buscadorReducer';

export const rootReducers = combineReducers({
    buscador,
    game_shop    
});
 ```

## Store
El estado de toda tu aplicación esta almacenado en un árbol guardado en un único store.

El Store es el objeto que los reúne. El store tiene las siguientes responsabilidades:

* Contiene el estado de la aplicación.
* Permite el acceso al estado via getState();
* Permite que el estado sea actualizado via dispatch(action);
* Registra los listeners via subscribe(listener);
* Maneja la anuliación del registro de los listeners via el retorno de la función de subscribe(listener).

```javascript
    // API = {subscribe, dispatch, getState}
    const store = createStore(reducers, middlewares);
 ```
 
## Actions
La única forma de modificar el estado es emitiendo una acción, un objeto describiendo que ocurrió.
Las acciones son un bloque de información que envia datos desde tu aplicación a tu store. Son la única fuente de información para el store. Las envias al store usando `store.dispatch()`.
Esto te asegura que ni tu vista ni callbacks de red van a modificar el estado directamente. En vez de eso, expresan un intento de modificar el estado.
```javascript
    export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';    

    export const fetch_pokemon_request = () => {
        return {
            type: FETCH_POKEMON_REQUEST        
        }    
    }

```
 ### Dispatch
 La unica forma de modificar el estado interno es despachando acciones.
 ```javascript
 store.dispatch({
     type: 'INCREMENT'
 })
 ```

## License 🔥
Copyright © 2020-present [Oscar Amado](https://github.com/ofaaoficial) 🧔
