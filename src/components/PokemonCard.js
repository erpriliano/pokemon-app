import React from 'react';

const PokemonCard = ({ imgUrl, nickname, pokemonName, onClick }) => {
    return (
        <div className="w-full rounded-md shadow-md bg-white items-center flex flex-col p-2">
            <img src={imgUrl} alt="poke-img" className="w-20 h-20" />
            <h1 className="font-semibold tracking-wide text-lg">{nickname}</h1>
            <h2 className="font-light text-gray-400 text-sm">
                ({pokemonName})
            </h2>

            <div className="w-full flex justify-center">
                <button
                    className="w-1/2 py-1 mt-4 mb-1 rounded-md bg-red-500 text-white text-xs"
                    onClick={onClick}
                >
                    Release
                </button>
            </div>
        </div>
    );
};

export default PokemonCard;
