const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.DB_HOST);
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const credentials = {
  gmail: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};
var emailService = require("./lib/email.js")(credentials);

// product test
app.get("/product",function(req,res){
  db.query("SELECT * FROM Product",(err,result)=>{
    res.send(result)
  })
})


// 會員登錄 註冊 忘記密碼
app.post("/profile/:logintype", function (req, res) {
  if ("login" === req.params.logintype) {
    const sqlSelect =
      "SELECT * FROM member WHERE account = ? and password = ? ";
    // console.log(req.body.account + "/" + req.body.password);
    db.query(
      sqlSelect,
      [req.body.account, req.body.password],
      (err, result, fields) => {
        if (err) res.send({ err: err });

        if (result.length > 0) {
          res.send(result);
        } else {
          if (req.body.account.length === 0)
            res.send({ message: "請輸入帳號" });
          else if (req.body.password.length === 0)
            res.send({ message: "請輸入密碼" });
          else res.send({ message: "帳號 / 密碼錯誤" });
        }
      }
    );
  } else if ("signup" === req.params.logintype) {
    if (req.body.account.length === 0) {
      res.send({ message: "請輸入帳號" });
    } else if (req.body.password.length === 0) {
      res.send({ message: "請輸入密碼" });
    } else if (req.body.email.length === 0) {
      res.send({ message: "請輸入信箱" });
    } else {
      const sqlSelect = "SELECT * FROM member WHERE account = ? ";
      db.query(sqlSelect, [req.body.account], (err, result, fields) => {
        if (err) res.send({ err: err });

        if (result.length > 0) {
          res.send({ message: "帳號已存在" });
        } else {
          const sqlInsert =
            "INSERT INTO member (account, password, email, letter) " +
            "VALUES (?, ?, ?, ?) ";
          db.query(
            sqlInsert,
            [
              req.body.account,
              req.body.password,
              req.body.email,
              req.body.letter,
            ],
            (err, result, fields) => {
              if (err) {
                res.send({ err: err });
              }
              res.send(result);
            }
          );
        }
      });
    }
  } else if ("certificate" === req.params.logintype) {
    if (req.body.email.length === 0) res.send({ message: "請輸入信箱" });
    else {
      const sqlSelect = "SELECT * FROM member WHERE email = ? ";
      db.query(sqlSelect, [req.body.email], (err, result, fields) => {
        if (err) res.send({ err: err });

        if (result.length > 0) {
          emailService.send(
            `"COOL" <${process.env.EMAIL}>`,
            `"${result[0].name}" <${result[0].email}>`,
            "COOL 測試",
            "<h1>Hello</h1><p>'TEST'</p>"
          );
          res.send(result);
        } else {
          res.send({ message: "EMAIL不存在" });
        }
      });
    }
  }
});

// 訂單紀錄
app.get("/member/order/:status", function (req, res) {
  let status = "";
  if ("processing" === req.params.status) status = 1;
  if ("solved" === req.params.status) status = 2;
  if ("refundlist" === req.params.status) status = 3;
  const sqlSelect =
    "SELECT * FROM cool_order WHERE status = ? and member_no = ? ";
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

// 聯絡我們
app.post("/member/contact", function (req, res) {
  const sqlInsert =
    "INSERT INTO contact ( email, service, subject, content) " +
    "VALUES (?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [req.body.email, req.body.service, req.body.subject, req.body.content],
    (req, result, fields) => {
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("port 3001");
});
