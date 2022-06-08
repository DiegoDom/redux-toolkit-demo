import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    page = Math.max(0, page);
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons());

        /* const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await resp.json(); */

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({
            page: page + 1,
            pokemons: data.results
        }));
    };
};