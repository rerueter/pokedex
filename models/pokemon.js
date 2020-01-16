const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: String,
  type: [String], // <== NOTE == this means the array will ONLY accept strings
  gender: String,
  attacks: [String],
  dex: Number,
  description: String,
  weakness: String
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
