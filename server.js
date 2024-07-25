const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const medicamentRoutes = require("./router/medicament");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use("/admin/medicament", medicamentRoutes);


const PORT = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://boubacarndiaye:boubacar@cluster0.rekaczf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err));


module.exports = app;