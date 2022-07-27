const express = require('express');
const data = require('./data.js');

const server = express();

server.get ('/', (req , res) => {
res.send ("Selam Express") 
} )

// yeni bir endpoint ekleyelim. Yani kullanıcıların ekleyebileceği bir yeni adress ekleyelim.
server.get("/aktorler", (req , res) =>{
   res.status(200).json(data);
});
   server.get("/aktorler/:id" ,(req ,res) => {
    const {id } = req.params;
    const aktor  = data.find((aktor=>aktor.id === parseInt(id))); // sayısal değeri ifade etmek için parseInt kullandık.
    if(aktor){
        res.status(200).json(aktor);
   } else{
    res.status(404).send("Aradığınız aktor ulaşılamadı.");
   }
   
});


server.listen(5000 , () => {
    console.log ("http://localhost:5000 adresine gelen istekler dinleniyor.");
    
});