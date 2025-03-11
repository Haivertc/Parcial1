const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

const dataPath = path.join(__dirname, "data", "starwar.json");
const characters = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

app.get("/", (req, res) => {
    res.render("index", { characters });
});

app.get("/characters", (req, res) => {
    res.json(characters);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
