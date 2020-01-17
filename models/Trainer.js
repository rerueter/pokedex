const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  name: String,
  hometown: String,
  // reference by ID of pokemon
  caughtPokemon: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pokemon"
    }
  ]
});

const Trainer = mongoose.model("Trainer", TrainerSchema);
module.exports = Trainer;
