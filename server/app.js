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

// 訂單紀錄
app.get("/member/order/:status", function (req, res) {
  let status = "";
  if ("processing" === req.params.status) status = 1;
  if ("solved" === req.params.status) status = 2;
  if ("refundlist" === req.params.status) status = 3;
  const sqlSelect = "SELECT * FROM cool_order WHERE status = ? and member_no = ? ";
  db.query(sqlSelect, [status, req.query.memberNo], (err, result, fields) => {
    res.send(result);
  });
});

// 蒐藏清單
app.get("/member/favorites", function (req, res) {
  const sqlSelect =
    "SELECT id,member_no,product_no,valid,'/images/product/product-0001.png' as image FROM favorites WHERE member_no = ? AND valid = ? ";
  db.query(
    sqlSelect,
    [req.query.memberNo, req.query.valid],
    (req, result, fields) => {
      res.send(result);
    }
  );
});

app.delete("/member/favorites", function (req, res) {
  const sqlDelete = "UPDATE favorites SET valid = ? WHERE id = ? ";
  db.query(sqlDelete, [req.body.valid, req.body.id], (req, result, fields) => {
    res.send(result);
  });
});

// 帳號設定
app.get("/member/setting", function (req, res) {
  const sqlSelect =
    "SELECT name, account, password, phone, email, address, DATE_FORMAT(birth, '%Y-%m-%d') as birth " +
    "FROM member " +
    "WHERE id = ? ";
  db.query(sqlSelect, [req.query.id], (req, result, fields) => {
    res.send(result);
  });
});

app.put("/member/setting", function (req, res) {
  const sqlUpdate =
    "UPDATE member SET name = ?, password = ?, phone = ? , email = ? , address = ? , birth = ? " +
    "WHERE id = ? ";
  db.query(
    sqlUpdate,
    [
      req.body.name,
      req.body.password,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.body.birth,
      req.body.id,
    ],
    (req, result, fields) => {
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("port 3001");
});
