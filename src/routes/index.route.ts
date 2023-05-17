import { Router } from "express";
import { pokemonRoutes } from "./pokemon.route";

const rootRouter = Router();
rootRouter.get("/", (req, res) => {
  res.send("health check");
});
rootRouter.use("/pokemon", pokemonRoutes);

export { rootRouter };
