import { IPokemon } from "../../types/pokemon";
import { ADD_TO_MY_POKEMON } from "../actionTypes";

export const addToMyPoke = (pokemon: IPokemon) => ({
  type: ADD_TO_MY_POKEMON,
  payload: {
    pokemon,
  },
});
