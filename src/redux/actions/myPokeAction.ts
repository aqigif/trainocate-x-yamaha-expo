import { IPokemon } from "../../types/pokemon";
import { ADD_TO_MY_POKEMON, DELETE_FROM_MY_POKEMON } from "../actionTypes";

export const addToMyPokemonAction = (pokemon: IPokemon) => ({
  type: ADD_TO_MY_POKEMON,
  payload: {
    pokemon,
  },
});


export const deleteFromMyPokemonAction = (id: number) => {
  return {
    type: DELETE_FROM_MY_POKEMON,
    payload: {
      id,
    },
  }
}
