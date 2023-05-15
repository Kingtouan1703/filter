import mongoose from "mongoose";

// Defining schema
const TrainerSchema = new mongoose.Schema({
  name: String,
});
// Defining Model
const TrainerModel = mongoose.model("pokemon", TrainerSchema);

export { TrainerModel };
