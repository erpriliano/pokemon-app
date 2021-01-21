import React from 'react';

import Layout from '../src/components/Layout';
import Header from '../src/components/Header';

function App() {
    return (
        <Layout>
            <Header title="Pokemon Catch" />
            <div className="w-full py-10 h-52 bg-green-300">
                <p>Yang ini coba dulu</p>
            </div>
        </Layout>
    );
}

export default App;
