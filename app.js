const express = require ("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://CharlyDev:go-fullstack@go-fullstack.eybxqop.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));


app.use ((req, resp) => {
    resp.json({
        message: "Votre requête à bien été reçue ! "
    })
})

module.exports = app;
