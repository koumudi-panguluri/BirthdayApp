
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));


fs.copyFile('./public/manifest.json', './dist/manifest.json',obj=>{
  console.log(obj);
})
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/dist/index.html'));
});


app.listen(port);