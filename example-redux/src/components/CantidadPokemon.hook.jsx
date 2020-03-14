import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';

const CantidadPokemonHook = () => {

    const pokemon = useSelector((state) => state.game_shop.pokemon);

    return (
        <Fragment>
            Unidad: {pokemon}
        </Fragment>
    )
} 

export default CantidadPokemonHook;
