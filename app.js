const express = require("express");
const mongoose = require("mongoose");
const pageControllers = require("./controllers/pageControllers");
const pageRouter = require("./routes/pageRoute");
const courseRouter = require("./routes/courseRoute");

const app = express();
const port = 3000;

// Connect DB
mongoose.connect('mongodb://localhost/misfit-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
    console.log('db connected succesfully!');
});

// Template engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use("/", pageRouter );
app.use("/courses", courseRouter );


app.listen(port, () => {
    console.log(`App started on port: ${port}`);
});