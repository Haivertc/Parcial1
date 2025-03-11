const express = require("express");
const getCharacters = require("../data/characters");

const router = express.Router();

router.get("/", (req, res) => {
  const characters = getCharacters();
  res.json(characters);
});

module.exports = router;
