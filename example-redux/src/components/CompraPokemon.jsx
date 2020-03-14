import React, {Component, Fragment} from 'react';

export class CompraPokemon extends Component {
    render() {
        return (
            <Fragment>
                <section className="text-center">
                    <button className="btn btn-outline-success btn-sm mr">Comprar</button>
                    <button className="btn btn-light btn-sm ml-3">Devolver</button>
                </section>                
            </Fragment>
        )
    }
}