import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Layout from '../src/components/Layout';

import Home from '../src/pages/Home';
import MyPokemon from '../src/pages/MyPokemon';
import Detail from '../src/pages/Detail';

function App() {
    return (
        <HashRouter basename="/">
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/myPokemon" component={MyPokemon} />
                <Route path="/detail/:pokemonName" component={Detail} />
            </Layout>
        </HashRouter>
    );
}

export default App;
