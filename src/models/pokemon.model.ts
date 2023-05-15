import mongoose from "mongoose";

const pokemonTypes = [
  "Grass",
  "Poison",
  "Fire",
  "Flying",
  "Dragon",
  "Water",
  "Bug",
  "Normal",
  "Electric",
  "Ground",
  "Fairy",
  "Fighting",
  "Psychic",
  "Rock",
  "Steel",
  "Ice",
  "Ghost",
  "Dark",
];

// Defining User schema
const Schema = mongoose.Schema;

const PokemonSchema = new mongoose.Schema({
  pokemon_name: {
    type: String,
    required: true,
  },
  pokemon_type_1: {
    type: String,
    required: true,
    enum: pokemonTypes,
  },
  pokemon_type_2: {
    type: String,
    allowNull: true,
    required: true,
    enum: pokemonTypes,
  },
  hp: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  sp_atk: {
    type: Number,
    required: true,
  },
  sp_def: {
    type: Number,
    required: true,
  },
  generation: {
    type: Number,
    required: true,
    min: 1,
    max: 6,
  },
  is_legendary: {
    type: Boolean,
    required: true,
  },
  current_owners_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trainer",
    },
  ],
});
const PokemonModel = mongoose.model("pokemon", PokemonSchema);

export { PokemonModel };
