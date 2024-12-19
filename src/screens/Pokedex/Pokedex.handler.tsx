import { useDispatch } from "react-redux";
import { pokemons } from "../../data/pokemons";
import { addToMyPokemonAction, deleteFromMyPokemonAction } from "../../redux/actions/myPokeAction";
import { useAppSelector } from "../../hooks/useReduxType";
import { IPokemon } from "../../types/pokemon";

const usePokedex = () => {
  const dispatch = useDispatch();
  const myPokemons = useAppSelector(state => state.myPoke.pokemons)

  const addToMyPokemon = (pokemon: IPokemon) => {
    dispatch(addToMyPokemonAction(pokemon))
  }


  const deleteFromMyPokemon = (id: number) => {
    dispatch(deleteFromMyPokemonAction(id))
  }

  return { pokemons, myPokemons, addToMyPokemon, deleteFromMyPokemon };
};

export default usePokedex;