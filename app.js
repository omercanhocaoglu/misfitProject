const express = require("express");
const pageControllers = require("./controllers/pageControllers");
const pageRouter = require ("./routes/pageRoute");

const app = express();
const port = 3000;

// Template engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

// Routes
app.use("/", pageRouter );


app.listen(port, () => {
    console.log(`App started on port: ${port}`);
});