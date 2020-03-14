import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class CantidadPokemon extends Component {
    render() {
        return (
            <Fragment>
                Unidades: {this.props.game_shop.pokemon}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
};

export default connect(mapStateToProps)(CantidadPokemon);
