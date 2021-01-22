import React, { useState, useEffect } from 'react';

const Detail = ({ pokemonName }) => {
    const [pokemonData, setPokemonData] = useState({
        name: '',
        imgUrl: '',
        moves: [],
        types: [],
        weight: 0
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
                    weight: pokeData.weight
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
            <h1 className="text-center text-2xl font-semibold tracking-wide">
                {pokemonName}
            </h1>
        </div>
    );
};

export default Detail;
