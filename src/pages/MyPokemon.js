import React, { useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const MyPokemon = () => {
    const dataStorage = JSON.parse(localStorage.getItem('myCatch'));
    const [myCatch, setMyCatch] = useState(dataStorage);

    return (
        <div className="w-full h-full">
            {myCatch === null || myCatch.length === 0 ? (
                <p className="flex justify-center items-center">
                    You haven't catch any
                </p>
            ) : (
                <div className="w-full grid grid-cols-2 gap-2">
                    {myCatch.map((data, index) => {
                        return (
                            <PokemonCard
                                key={index}
                                imgUrl={data.imgUrl}
                                nickname={data.nickname}
                                pokemonName={data.name}
                                onClick={() => {
                                    var removed = myCatch.filter(
                                        (pokemon) =>
                                            pokemon.nickname !== data.nickname
                                    );
                                    setMyCatch(removed);
                                    localStorage.setItem(
                                        'myCatch',
                                        JSON.stringify(removed)
                                    );
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyPokemon;
