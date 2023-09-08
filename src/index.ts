console.log("hello");

import Sequelize from 'sequelize';



import express from 'express'
import "dotenv/config"

const app = express();
const PORT = process.env.PORT as string;

app.get('/helloo', (_, res) => {
    console.log("hello les toutous");
    res.send("ok")
})

app.get('/nombre_alea', (_, res) => {
  let a = Math.floor(Math.random()*101)
  console.log(a);
  res.send("tirage " + a);
})

app.listen( parseInt(PORT), () =>
  console.log("Server is listening on port " + PORT + "...")
);