import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100 h-screen w-full md:w-1/3 mx-auto inset-0 py-20">
            {children}
        </div>
    );
};

export default Layout;
