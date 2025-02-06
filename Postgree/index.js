process.env.SECRET_KEY = "5b1a3923cc1e1e19523fd5c3f20b409509d3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84d";

const port = 4000;

/* Node Server */

// const http = require("http")

// const server = http.createServer((req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/plain');
//   res.end('Hello World!');
// })

// server.listen(port, () => {
//   console.log("Connection Successfull, on port "+port);
// });

/* Express Server */
const express = require("express");
const app = express()
const auth = require('./services/authenticate');

app.post("/login", auth.login);


app.get("/", (req, res) => {
  res.send("Hello Express!");
})

app.get("/name/:firstName", (req, res) => {
  res.send(`Hello ${req.params.firstName}`);
})

app.get("/name/:firstName/:lastName", (req, res) => {
  res.send(`Hello ${req.params.firstName} ${req.params.lastName}`);
})

app.get("/home/user/:firstName/:age", (req, res) => {
  if(req.params.age>=18){
    res.send(`Hello ${req.params.firstName}, you're ${req.params.age} years old`);
  }else{
    res.send(`Hello ${req.params.firstName}, you're too young`);
  }
  
})


app.listen(port,()=>{
  console.log("Connection Successfull, on port " + port);
})