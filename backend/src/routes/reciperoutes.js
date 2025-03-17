import express from "express";
import Recipe from "../models/Recipe.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.userId = decoded.id;
    next();
  });
};

// Add Recipe
router.post("/", verifyToken, async (req, res) => {
  const { title, description, image } = req.body;
  const recipe = new Recipe({ title, description, image, createdBy: req.userId });
  await recipe.save();
  res.json({ message: "Recipe added successfully" });
});

// Get All Recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find().populate("createdBy", "name");
  res.json(recipes);
});

// Delete Recipe
router.delete("/:id", verifyToken, async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted successfully" });
});

export default router;
