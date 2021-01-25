import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
    const [pokemon, setPokemon] = useState({
        count: 0,
        next: null,
        previous: null,
        results: [],
        hasMore: true
    });

    useEffect(() => {
        ApiCall();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const ApiCall = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => res.json())
            .then((pokeApi) =>
                setPokemon({
                    ...pokemon,
                    count: pokeApi.count,
                    next: pokeApi.next,
                    previous: pokeApi.previous,
                    results: pokeApi.results
                })
            )
            .catch((err) => console.log(err));
    };

    const loadMore = () => {
        fetch(pokemon.next)
            .then((res) => res.json())
            .then((pokeApi) =>
                setPokemon({
                    ...pokemon,
                    next: pokeApi.next,
                    previous: pokeApi.previous,
                    results: pokemon.results.concat(pokeApi.results),
                    hasMore:
                        pokemon.results.concat(pokeApi.results).length !==
                        pokeApi.count
                })
            )
            .catch((err) => console.log(err));
    };

    return (
        <ul>
            <InfiniteScroll
                dataLength={pokemon.results.length}
                hasMore={pokemon.hasMore}
                next={() => loadMore()}
                loader={
                    <p className="w-full text-center my-2">
                        ... Loading More ...
                    </p>
                }
            >
                {pokemon.results.map((poke, index) => (
                    <li key={index} className="p-1 border-b border-gray-400">
                        <Link
                            className="tracking-wide text-lg"
                            to={`/detail/${poke.name}`}
                        >
                            {poke.name}
                        </Link>
                    </li>
                ))}
            </InfiniteScroll>
        </ul>
    );
};

export default Home;
