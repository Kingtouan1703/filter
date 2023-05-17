import { PokemonModel } from "../models/pokemon.model";

const PokemonService = {
  getAll: async (page:any, limit:any) => {
    const testPage = page || 2;
    const testLimit = limit || 20;
    const pokemons = await PokemonModel.aggregate([
      { $skip: (testPage - 1) * testLimit },
      { $limit: testLimit },
    ]);
    // Return the books
    return pokemons;
  },
};

export { PokemonService };
