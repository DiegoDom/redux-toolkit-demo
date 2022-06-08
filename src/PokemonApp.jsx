import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './components/Loader';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="pokemonapp__contenedor">
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>Page {page}</p>
      <button
        className="btn mr-3"
        disabled={isLoading || page <= 1}
        onClick={() => {
          dispatch(getPokemons(page - 2));
        }}
      >
        Prev
      </button>
      <button
        className="btn"
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        Next
      </button>
      {isLoading && <Loader />}
    </div>
  );
};
