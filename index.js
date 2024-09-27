const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

app.get('/messages', (req, res) => {

  res.json(messages);
});

app.get('/messages/:id', function (req, res){
    let id = req.params.id;
    res.send("GET messages with :id " + id);
});

app.post("/messages", (req, res) => {
    let message = req.body.message;
    console.log(message);
    messages.push(message);
    res.send("POST messages");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});