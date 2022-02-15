var express = require('express');
var app = express();

app.use('/static', express.static('../HSF'));

app.get("/1", (req, res) => {
    res.send("Hello World");
});

app.get("/hi", (req, res) => {
    res.send("Hi World");
});

app.post("/", (req, res) => {
    res.send("LKM World");
});

app.listen(3000);
