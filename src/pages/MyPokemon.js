import React, { useState } from 'react';

const MyPokemon = () => {
    const dataStorage = JSON.parse(localStorage.getItem('myCatch'));
    const [myCatch, setMyCatch] = useState(dataStorage);

    return (
        <div className="w-full h-full">
            {dataStorage.length === 0 ? (
                <p className="flex justify-center items-center">
                    You haven't catch any
                </p>
            ) : (
                <div className="w-full grid grid-cols-2 gap-2">
                    {myCatch.map((data, index) => {
                        console.log(myCatch);
                        return (
                            <div
                                key={index}
                                className="w-full rounded-md shadow-md bg-white items-center flex flex-col p-2"
                            >
                                <img
                                    src={data.imgUrl}
                                    alt="poke-img"
                                    className="w-20 h-20"
                                />
                                <h1 className="font-semibold tracking-wide text-lg">
                                    {data.nickname}
                                </h1>
                                <h2 className="font-light text-gray-400 text-sm">
                                    ({data.name})
                                </h2>

                                <div className="w-full flex justify-center">
                                    <button
                                        className="w-1/2 py-1 mt-4 mb-1 rounded-md bg-red-500 text-white text-xs"
                                        onClick={() => {
                                            var removed = myCatch.filter(
                                                (pokemon) =>
                                                    pokemon.nickname !==
                                                    data.nickname
                                            );
                                            setMyCatch(removed);
                                            localStorage.setItem(
                                                'myCatch',
                                                JSON.stringify(removed)
                                            );
                                        }}
                                    >
                                        Release
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyPokemon;
