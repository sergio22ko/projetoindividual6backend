import express from "express";
import mysql from "mysql";


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "carteira"

});


app.get("/carteira", (req, res)=>{
    const q = "SELECT * FROM saida"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.use(express.json());



app.get("/", (req, res)=>{
    res.json("Oi, Este é o backend!")
})

app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
});