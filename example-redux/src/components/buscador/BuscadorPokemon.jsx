import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchPokemon} from '../../redux/actions/buscadorAccion';

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('pikachu');
    return (
        <div className="form-group">
            <label htmlFor="buscar_pokemon" className="text-white">Buscar</label>
            <input type="text" className="form-control" id="buscar_pokemon"
                   value={pokemon_name}
                   onChange={
                       (event) => {
                           set_pokemon_name(event.target.value)
                       }
                   }
            />
            <button className="btn btn-primary mt-3"
                    onClick={
                        () => {
                            dispatch(fetchPokemon(pokemon_name))
                        }
                    }
            >Buscar
            </button>
        </div>
    )
};

export default BuscadorPokemon;
