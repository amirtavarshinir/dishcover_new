import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./home.css";
const Home = () => {

  return (
    <div>
      <br/><br/><br/><br/>
      <div className="carousel-container">
        <div id="fadeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/cover4.jpg" className="d-block w-100" alt="Cooking"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Delicious Food</h5>
                <p>Explore mouth-watering dishes from around the world.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Paratha.jpg" className="d-block w-100" alt="Cooking"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Kitchen Expert</h5>
                <p>Cook your favorite recipes in a perfect setup.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/3ccf6184-3c16-4218-90f1-8ea7dd12f167.jpg" className="d-block w-100" alt="Cooking"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Cooking Recipes</h5>
                <p>Find the best recipes tailored to your taste.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#fadeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#fadeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br/><br/><br/>
      <center>
        <h1>Dishcover 🥘</h1>
        <h5>Crafting and sharing the perfect plate by discovering it - An interactive recipe-sharing platform 🍴</h5>
        <br/><br/><hr/><br/>
        <h3>Welcome to Dishcover, the ultimate interactive recipe-sharing platform where food lovers unite!</h3>
        <h5>
          Whether you're experimenting in the kitchen or looking for inspiration, Dishcover connects you with a vibrant
          community of chefs and home cooks. Come, join, and bring your culinary creativity to life.
        </h5>
      </center>
    </div>
  );
};

export default Home;
