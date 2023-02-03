const express = require("express");
const character = express.Router();
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

character.get("/onsearch/:id", getCharById);
character.get("/detail/:id", getCharDetail);

module.exports = character;
