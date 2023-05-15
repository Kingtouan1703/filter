import mongoose from "mongoose";

// Defining schema
const TrainedPokemonSchema = new mongoose.Schema({
  name: String,
});
// Defining Model
const TrainedPokemonModel = mongoose.model("trainer", TrainedPokemonSchema);

export { TrainedPokemonModel };
