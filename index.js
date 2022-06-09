const express = require("express"),
body_parser = require("body-parser"),
app = express().use(body_parser.json());

app.get("/mensaje", (req, res) => {
    res.send("Hola mundo");
});


app.listen(3000,()=>{
    console.log(`Escuchando el puerto ${ 3000 }`)
})