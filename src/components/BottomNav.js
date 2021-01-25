import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="w-full md:w-1/3 bg-red-400 bottom-0 fixed z-10 p-4">
            <div className="flex justify-around">
                <Link
                    className="flex flex-col items-center justify-center text-white"
                    to="/"
                >
                    <svg
                        className="w-6 h-6 mb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                    </svg>
                    <p className="text-sm tracking-wide">Pokemon List</p>
                </Link>
                <Link
                    className="flex flex-col items-center justify-center text-white"
                    to="/myPokemon"
                >
                    <svg
                        className="w-6 h-6 mb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                    </svg>
                    <p className="text-sm tracking-wide">My Pokemon</p>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
