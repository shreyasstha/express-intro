import express from "express";

const app = express();

//?req method
//?status code
//?success => 200-299
//?error
//?client-side error => 400-499
//?server-side error =. 500-599

//?api
app.get("/", (req, res) => {
  return res.status(200).send("My first API....");
}); //in google: localhost:8000/

app.get("/hi", (req, res) => {
  return res.status(200).send("helloooo!!!....");
});

//network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
