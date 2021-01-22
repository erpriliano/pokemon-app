import React, { useState, useEffect } from 'react';

const catchProb = () => {
    const probability = Math.random() < 0.5;
    if (probability) {
        console.log('Catched!');
    } else {
        console.log('Failed miserably');
    }
};

const Detail = ({ pokemonName }) => {
    const [pokemonData, setPokemonData] = useState({
        name: '',
        imgUrl: '',
        moves: [],
        types: [],
        weight: 0,
        height: 0
    });

    useEffect(() => {
        reqPokemonData();
    }, []);

    const reqPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((pokeData) => {
                setPokemonData({
                    name: pokeData.name,
                    imgUrl: pokeData.sprites.front_default,
                    moves: pokeData.moves,
                    types: pokeData.types,
                    weight: pokeData.weight,
                    height: pokeData.height
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="w-full flex flex-col">
            <img
                className="w-52 h-52 mx-auto"
                src={pokemonData.imgUrl}
                alt="pokemon-img"
            />
            <h1 className="text-center text-2xl font-semibold tracking-wider uppercase">
                {pokemonName}
            </h1>

            <div className="w-full flex mt-6">
                <div className="w-1/2">
                    <p className="font-semibold text-center">
                        Weight : {pokemonData.weight / 10 + ' Kgs'}
                    </p>
                </div>
                <div className="w-1/2">
                    <p className="font-semibold text-center">
                        Height : {pokemonData.height / 10 + ' m'}
                    </p>
                </div>
            </div>

            <div className="w-full mt-6 flex flex-col">
                <h1 className="font-bold tracking-wider mb-2">Types</h1>
                {pokemonData.types.map((type, index) => {
                    const typesLen = pokemonData.types.length;
                    if (typesLen === index + 1) {
                        return type.type.name;
                    }
                    return type.type.name + ', ';
                })}
            </div>

            <div className="w-full my-6 flex flex-col">
                <h1 className="font-bold tracking-wider mb-2">Moves</h1>
                <p className="text-sm">
                    {pokemonData.moves.map((move, index) => {
                        const movesLen = pokemonData.moves.length;
                        if (movesLen === index + 1) {
                            return move.move.name;
                        }
                        return move.move.name + ', ';
                    })}
                </p>
            </div>

            <div className="w-full flex justify-center my-6">
                <button
                    onClick={() => catchProb()}
                    className="w-1/2 py-2 bg-blue-600 text-white text-lg tracking-wider rounded-md shadow-md"
                >
                    Catch Me!
                </button>
            </div>
        </div>
    );
};

export default Detail;
