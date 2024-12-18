import { useDispatch } from "react-redux";
import { pokemons } from "../../data/pokemons";
import { addToMyPoke } from "../../redux/actions/myPokeAction";
import { useAppSelector } from "../../hooks/useReduxType";

const usePokedex = () => {
  const dispatch = useDispatch();
  const myPokemons = useAppSelector(state => state.myPoke.pokemons)

  const addToMyPokemon = (pokemon: any) => {
    dispatch(addToMyPoke(pokemon))
  }

  return { pokemons, myPokemons, addToMyPokemon };
};

export default usePokedex;