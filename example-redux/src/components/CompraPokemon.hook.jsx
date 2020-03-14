import React, {Fragment} from "react"
import {useDispatch} from "react-redux";
import {return_pokemon_action, buy_pokemon_action} from '../redux/actions/gameShopAction';


const CompraPokemonHook = () => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <section className="text-center">
                <button className="btn btn-outline-success btn-sm mr"
                        onClick={() => dispatch(buy_pokemon_action(1))}
                >Comprar
                </button>
                <button className="btn btn-light btn-sm ml-3"
                        onClick={() => dispatch(return_pokemon_action(1))}
                >Devolver
                </button>
            </section>
        </Fragment>
    )
};

export default CompraPokemonHook;
