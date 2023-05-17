import { Router } from "express";
import { PokemonService } from "../services/pokemon.service";
const pokemonRoutes = Router();

pokemonRoutes.get("/", async (req, res) => {
  try {
    const { currentPage, limit } = req.query;
    const pokemon = await PokemonService.getAll(currentPage, limit);
    res.json(pokemon);
  } catch (error) {}
  res.send("User API Home");
});

export { pokemonRoutes };
