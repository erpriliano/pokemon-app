import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const catchProb = (caught, setCaught) => {
    const probability = Math.random() < 0.5;
    if (probability) {
        setCaught({ ...caught, openModal: true, caught: true });
    } else {
        setCaught({ ...caught, openModal: true });
    }
};

const Detail = () => {
    let { pokemonName } = useParams();
    const [pokemonData, setPokemonData] = useState({
        name: '',
        imgUrl: '',
        moves: [],
        types: [],
        weight: 0,
        height: 0,
        nickname: ''
    });
    const [caught, setCaught] = useState({
        openModal: false,
        caught: false,
        showErrorMessage: false
    });

    useEffect(() => {
        reqPokemonData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const reqPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((pokeData) => {
                setPokemonData({
                    ...pokemonData,
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

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('#modal');

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
                    onClick={() => catchProb(caught, setCaught)}
                    className="w-1/2 py-2 bg-blue-600 text-white text-lg tracking-wider rounded-md shadow-md"
                >
                    Catch Me!
                </button>
            </div>

            {console.log(caught)}
            {caught.caught ? (
                <Modal
                    isOpen={caught.openModal}
                    style={customStyles}
                    contentLabel="Give nickname"
                    onRequestClose={() =>
                        setCaught({
                            ...caught,
                            caught: false,
                            openModal: false
                        })
                    }
                >
                    <div className="w-64">
                        <h3 className="font-semibold tracking-wider text-center mb-4">
                            Catched!
                        </h3>

                        <div className="flex flex-col mb-4">
                            <label className="text-sm mb-1 font-light">
                                Give Nickname :
                            </label>
                            <input
                                className="py-1 px-2 focus:outline-none border border-gray-300 rounded-md text-sm"
                                type="text"
                                placeholder="Nickname..."
                                onChange={(e) =>
                                    setPokemonData({
                                        ...pokemonData,
                                        nickname: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div
                            className={`w-full my-1 ${
                                caught.showErrorMessage ? '' : 'hidden'
                            }`}
                        >
                            <p className="text-xs text-center text-red-500">
                                Nickname already used for this pokemon. Give
                                another name.
                            </p>
                        </div>

                        <div className="w-full mt-3 mb-1 flex justify-center">
                            <button
                                className="bg-blue-600 text-white text-sm tracking-wider w-1/3 py-2 rounded-md"
                                onClick={() => {
                                    var obj = pokemonData;
                                    var dataLocalStorage = JSON.parse(
                                        localStorage.getItem('myCatch') || '[]'
                                    );

                                    var checkExisting = dataLocalStorage.filter(
                                        (data) =>
                                            data.name === obj.name &&
                                            data.nickname === obj.nickname
                                    );

                                    if (checkExisting.length === 0) {
                                        dataLocalStorage.push(obj);
                                        localStorage.setItem(
                                            'myCatch',
                                            JSON.stringify(dataLocalStorage)
                                        );
                                        setCaught({
                                            ...caught,
                                            openModal: false
                                        });
                                    } else {
                                        setCaught({
                                            ...caught,
                                            showErrorMessage: true
                                        });
                                    }
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
            ) : (
                <Modal
                    isOpen={caught.openModal}
                    style={customStyles}
                    contentLabel="Fail to catch"
                    onRequestClose={() =>
                        setCaught({
                            ...caught,
                            openModal: false,
                            caught: false
                        })
                    }
                >
                    <div className="w-52">
                        <h3 className="font-semibold tracking-wider text-center mb-4">
                            Failed to catch!
                        </h3>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Detail;
