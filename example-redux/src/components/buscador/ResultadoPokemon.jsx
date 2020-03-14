import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {
    const buscador = useSelector((state) => state.buscador);

    return (
        <div>
            <h3 className="text-white">Resultado</h3>
            {buscador.loading && 
                <div className="text-warning">Buscando...</div>}
            {buscador.error !== '' && 
                <div className="text-danger">{buscador.error}</div>}
            {buscador.pokemon.name 
                && <div className="text-success">
                <img src={buscador.pokemon.sprites.front_default} alt="pokemon"/>
                <span>{buscador.pokemon.name}</span>
            </div>}
        </div>
    )
}

export default ResultadoPokemon;