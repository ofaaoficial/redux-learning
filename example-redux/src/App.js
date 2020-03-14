import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon  from './components/CantidadPokemon';
import CompraPokemon  from './components/CompraPokemon';

import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <section className="App">
      <article className="row">
        <section className="col-12">
          <section className="card mt-5" style={{maxWidth: '400px'}}>
            <div className="row no-gutters">        
              <article className="col-4">
                <img src={require('./imgs/pokemon.jpg')} alt="pokemon" className="card-img" style={{height: "150px", objectFit: "cover"}}/>
              </article>            
              <article className="col-8">
                <section className="card-body">
                  <article className="card-title h3 text-center">
                    <CantidadPokemon />
                  </article>
                  <CompraPokemon />
                </section>
              </article>            
            </div>
          </section>
        </section>
      </article>
    </section>
    </Provider>
  );
}

export default App;
