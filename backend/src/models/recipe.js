import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Recipe", RecipeSchema);
