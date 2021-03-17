const express = require("express"); // module for express
const path = require("path") // module for path
const app = express();   // initializing application 

// setting a routing path 
app.get("/", (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname +  '/index.html'));
})

app.get("/index", (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname +  '/index.html'));
})

app.get("/about", (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname +  '/about.html'));
})

app.get("/style.css", (req, res) => {
    res.status(200);
    res.contentType("text/css");
    res.sendFile(path.join(__dirname +  '/style.css'));
})

app.get("/about.css", (req, res) => {
    res.status(200);
    res.contentType("text/css");
    res.sendFile(path.join(__dirname +  '/about.css'));
})

app.get("/back1.jpg", (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname +  '/back1.jpg'));
})

app.get("/backg.jpg", (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname +  '/backg.jpg'));
})

app.get("/img.png", (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname +  '/img.png'));
})

app.get("/logo.png", (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname +  '/logo.png'));
})

app.get("/logo2.png", (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname +  '/logo2.png'));
})

app.get("/script.js", (req, res) => {
    res.status(200);
    res.contentType("text/js");
    res.sendFile(path.join(__dirname +  '/script.js'));
})

app.get("/about/team_photo", (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname +  '/team_photo.png'));
})

app.get("/video", (req, res) => {
    res.status(200);
    res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'); // redirecting to another web page 
})

app.set("port", 3000 || process.env.PORT) // cheking for port availability

app.listen(app.get("port"), () =>{
    console.log(`Express server is running on the localhost: ${app.get("port")}. Press CTRL+C to terminate..`)
})
