import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="w-full md:w-1/3 flex justify-between items-center bg-red-400 top-0 fixed z-10 p-4 shadow-md">
            <h1 className="font-serif text-xl tracking-wide text-white">
                {title}
            </h1>
        </div>
    );
};

export default Header;
