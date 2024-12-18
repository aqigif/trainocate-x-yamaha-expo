import { pokemons } from "../../data/pokemons";

const usePokedexDetail = ({ num }: { num: string }) => {
  const pokemon = pokemons.find((p) => p.num === num);
  return { pokemon };
};

export default usePokedexDetail;
