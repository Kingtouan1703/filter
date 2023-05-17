import express, { Request, Response } from "express";
import { env } from "../config/env";
import { connectDB } from "./database/mongodb.database";
import { PokemonModel } from "./models/pokemon.model";
import { rootRouter } from "./routes/index.route";
// Create Express server
const app = express();
const port = env.port;

connectDB();
app.use(express.json());
// Define a route handler
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});

app.use("/api/v1", rootRouter);
