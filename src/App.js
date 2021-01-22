import React from 'react';
import { Router } from '@reach/router';

import Layout from '../src/components/Layout';

import Home from '../src/pages/Home';
import MyPokemon from '../src/pages/MyPokemon';

function App() {
    return (
        <Layout>
            <Router>
                <Home path="/" />
                <MyPokemon path="/myPokemon" />
            </Router>
        </Layout>
    );
}

export default App;
