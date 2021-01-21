import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="w-full md:w-1/3 bg-red-400 top-0 fixed z-10 p-4 shadow-md">
            <h1 className="font-serif text-lg tracking-wide text-white">
                {title}
            </h1>
        </div>
    );
};

export default Header;
