
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