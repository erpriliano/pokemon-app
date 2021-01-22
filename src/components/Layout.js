import React from 'react';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100 min-h-screen w-full md:w-1/3 mx-auto inset-0 py-20">
            <Header title="Rupa rupa" />
            <div className="px-6">{children}</div>
            <BottomNav />
        </div>
    );
};

export default Layout;
