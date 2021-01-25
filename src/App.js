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
                <Route exact path="/myPokemon" component={MyPokemon} />
                <Route exact path="/detail/:pokemonName" component={Detail} />
                {/* <Router>
                    <Home path="/" />
                    <MyPokemon path="/myPokemon" />
                    <Detail path="/detail/:pokemonName" />
                </Router> */}
            </Layout>
        </HashRouter>
    );
}

export default App;
