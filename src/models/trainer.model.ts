import { mongoose } from "../database/mongodb.database";
// Defining schema
const TrainerSchema = new mongoose.Schema({
  name: String,
});
// Defining Model
const TrainerModel = mongoose.model("pokemon", TrainerSchema);

export { TrainerModel };
