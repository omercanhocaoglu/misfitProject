const express = require("express");

const app = express();
const port = 3000;

// Template engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.status(200).render('index', {
        page_name: "index"
    });
});
app.get("/about", (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
});
app.get("/contact", (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
    });
});

app.listen(port, () => {
    console.log(`App started on port: ${port}`);
});