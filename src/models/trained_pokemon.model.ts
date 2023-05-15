import { mongoose } from "../database/mongodb.database";
// Defining schema
const TrainedPokemonSchema = new mongoose.Schema({
  name: String,
});
// Defining Model
const TrainedPokemonModel = mongoose.model("pokemon", TrainedPokemonSchema);

export { TrainedPokemonModel };
