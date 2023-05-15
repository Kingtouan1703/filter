import { mongoose } from "../database/mongodb.database";
// Defining User schema
const PokemonSchema = new mongoose.Schema({
  pokemon_name: String,
  pokemon_type: String,
  HP: Number,
  attack: Number,
  defence: Number,
  sp_atk: Number,
  sp_def: Number,
  generation: Number,
  isLegendary: Boolean,
  current_owners_id: String,
});
const PokemonModel = mongoose.model("pokemon", PokemonSchema);

export { PokemonModel };
