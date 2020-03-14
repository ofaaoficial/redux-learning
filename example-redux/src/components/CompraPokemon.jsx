import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {buy_pokemon_action, return_pokemon_action} from '../redux/actions/gameShopAction';

class CompraPokemon extends Component {
    render() {
        return (
            <Fragment>
                <section className="text-center">
                    <button className="btn btn-outline-success btn-sm mr" 
                        onClick={() => this.props.buy_pokemon_action(1)}
                    >Comprar</button>
                    <button className="btn btn-light btn-sm ml-3"
                        onClick={() => this.props.return_pokemon_action(1)}
                    >Devolver</button>
                </section>                
            </Fragment>
        )
    }
}

const mapDispathToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

// null = mapStateToProps
export default connect(null, mapDispathToProps)(CompraPokemon);