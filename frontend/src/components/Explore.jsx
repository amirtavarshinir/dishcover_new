
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Explore = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="body">
      <div className="container py-5">
        <h2 className="text-center mb-4">Explore Recipes</h2>
        <div className="row">
          {recipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe._id}>
              <div className="card">
                <img src={`http://localhost:5000/uploads/${recipe.image}`} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <a href="#" className="btn btn-primary w-100">View Recipe</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
