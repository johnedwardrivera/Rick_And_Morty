const express = require("express");
const {
  deleteFavorite,
  postFavorite,
} = require("../controllers/favoriteController");
const favorite = express.Router();

favorite.post("/rickandmorty", postFavorite);
favorite.delete("/rickandmorty/:id", deleteFavorite);

module.exports = favorite;
