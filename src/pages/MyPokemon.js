import React from 'react';

const MyPokemon = () => {
    const dataStorage = JSON.parse(localStorage.getItem('myCatch'));

    return (
        <div className="w-full h-full bg-blue-300">
            {dataStorage.length === 0 ? (
                <p className="flex justify-center items-center">
                    You haven't catch any
                </p>
            ) : (
                <div>
                    {dataStorage.map((data) => {
                        return <p>{data.name}</p>;
                    })}
                </div>
            )}
        </div>
    );
};

export default MyPokemon;
