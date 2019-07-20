import 'dotenv/config';
import express from 'express';

const app = express();

const path = require("path"); 

app.set("view engine", "ejs");
app.set("views", __dirname + "/static");
app.use("/static", express.static(path.join(__dirname, "static")));
console.log(path.join(__dirname, "static"));
app.engine("html", require("ejs").renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
