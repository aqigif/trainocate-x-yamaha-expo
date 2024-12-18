import { AnyAction } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon";
import { ADD_TO_MY_POKEMON } from "../actionTypes";

interface IStore {
  pokemons: IPokemon[];
  loading: boolean;
  error: any;
}

const initialState: IStore = {
  loading: false,
  error: null,
  pokemons: [],
};

export const myPokeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_MY_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload.pokemon] as IPokemon[],
      };

    default:
      return {
        ...state,
      };
  }
};
