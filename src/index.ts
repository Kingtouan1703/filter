import express, { Request, Response } from "express";
import { env } from "../config/env";
import { connectDB } from "./database/mongodb.database";
import { PokemonModel } from "./models/pokemon.model";
// Create Express server
const app = express();
const port = env.port;

connectDB();
// Define a route handler
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
