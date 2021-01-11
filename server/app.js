const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "cool",
  password: "12345",
  database: "cool",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/member/refund/:status", function (req, res) {
  //   console.log(req.params.status);
  let status = "";
  if ("processing" === req.params.status) status = 1;
  if ("solved" === req.params.status) status = 2;
  if ("refundlist" === req.params.status) status = 3;
  const sqlSelect = "SELECT * FROM cool_order WHERE status = ? ";
  db.query(sqlSelect, [status], (err, result, fields) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("port 3001");
});
