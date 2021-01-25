const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

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

// 商品首頁 get
app.get("/product", function (req, res) {
  db.query("SELECT * FROM product", "", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(JSON.stringify(result));
  });
});

// 商品詳細頁 get product_image
app.get("/detail/:brand/:id", function (req, res) {
  db.query(
    // 兩張表成功
    "SELECT * FROM product INNER JOIN product_images ON product.id = product_images.product_id  WHERE product.id =" +
      req.params.id +
      " ORDER BY color",

    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(JSON.stringify(result));
    }
  );
});

// 商品詳細頁 post product_stock
app.post("/detail/:brand/:id", function (req, res) {
  db.query(
    "SELECT * FROM product INNER JOIN product_stock ON product.id = product_stock.product_id  WHERE product.id =" +
      req.params.id +
      " ORDER BY color , size",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(JSON.stringify(result));
    }
  );
});

//clothing
app.get("/clothing", function (req, res) {
  db.query(
    "SELECT * FROM pages_data WHERE clothing_id != '' ORDER BY CONVERT(clothing_id,SIGNED ) ",
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.send(JSON.stringify(result));
    }
  );
});

//clothing
app.get("/clothing/:id", function (req, res) {
  db.query(
    "SELECT * FROM product " + "WHERE clothing_id = ? ORDER BY category",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(JSON.stringify(result));
    }
  );
});

// 會員登錄 註冊 忘記密碼
app.post("/profile/:logintype", function (req, res) {
  if ("login" === req.params.logintype) {
    if (req.body.account.length === 0) {
      res.send({ message: "請輸入帳號" });
      return;
    } else if (req.body.password.length === 0) {
      res.send({ message: "請輸入密碼" });
      return;
    } else {
      const sqlSelect =
        "SELECT id, CASE name WHEN '' THEN 'Hi' ELSE name END AS name,account,password,phone,email,address,birth,letter,type " +
        "FROM member WHERE account = ? and password = ? and type = 'N' ";
      db.query(
        sqlSelect,
        [req.body.account, req.body.password],
        (err, result, fields) => {
          if (err) res.send({ err: err });

          if (result.length > 0) {
            res.send(result);
          } else {
            res.send({ message: "帳號 / 密碼錯誤" });
          }
        }
      );
    }
  } else if ("signup" === req.params.logintype) {
    if (req.body.account.length === 0) {
      res.send({ message: "請輸入帳號" });
    } else if (req.body.password.length === 0 && req.body.type === "N") {
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
          const sqlSelect = "SELECT * FROM member WHERE email = ? ";
          db.query(sqlSelect, [req.body.email], (err, result, fields) => {
            if (err) res.send({ err: err });
            if (result.length > 0) {
              res.send({ message: "此EMAIL已註冊" });
            } else {
              const sqlInsert =
                "INSERT INTO member (account, password, email, letter, type) " +
                "VALUES (?, ?, ?, ?, 'N') ";
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
      });
    }
  } else if ("certificate" === req.params.logintype) {
    if (req.body.email.length === 0) res.send({ message: "請輸入信箱" });
    else {
      const sqlSelect = "SELECT * FROM member WHERE email = ? and type = 'N' ";
      db.query(sqlSelect, [req.body.email], (err, result, fields) => {
        if (err) res.send({ err: err });

        if (result.length > 0) {
          const sqlUpdate =
            "UPDATE member SET password = ? WHERE id = ? and type = 'N' ";
          db.query(
            sqlUpdate,
            ["00000000", result[0].id],
            (err, result, fields) => {
              if (err) {
                res.send({ err: err });
                return;
              }
            }
          );
          emailService.send(
            `"COOL" <${process.env.EMAIL}>`,
            `"${result[0].name}" <${result[0].email}>`,
            "COOL 取回密碼",
            "<h1>Hello</h1><p>你的密碼是00000000</p>"
          );
          res.send(result);
        } else {
          const sqlSelect =
            "SELECT * FROM member WHERE email = ? and type = 'G' ";
          db.query(sqlSelect, [req.body.email], (err, result, fields) => {
            if (err) res.send({ err: err });

            if (result.length > 0) {
              res.send({ message: "請使用Google登入" });
            } else {
              res.send({ message: "EMAIL不存在" });
            }
          });
        }
      });
    }
  } else if ("googlelogin" === req.params.logintype) {
    console.log(req.body.name);
    const sqlSelect =
      "SELECT id, CASE name WHEN '' THEN 'Hi' ELSE name END AS name,account,password,phone,email,address,birth,letter,type " +
      "FROM member WHERE email = ? AND type = 'G' ";
    db.query(sqlSelect, [req.body.email], (err, result, fields) => {
      if (err) res.send({ err: err });

      if (result.length > 0) {
        res.send(result);
      } else {
        const sqlInsert =
          "INSERT INTO member (name, account, password, email, letter, birth, phone, address, type) " +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
        db.query(
          sqlInsert,
          [
            req.body.name,
            req.body.account + req.body.birth2,
            req.body.password,
            req.body.email,
            req.body.letter,
            req.body.birth,
            req.body.phone,
            req.body.address,
            req.body.type,
          ],
          (err, result, fields) => {
            if (err) {
              res.send({ err: err });
            }
            const sqlSelect =
              "SELECT * FROM member WHERE email = ? AND type = 'G' ";
            db.query(sqlSelect, [req.body.email], (err, result, fields) => {
              if (err) res.send({ err: err });

              if (result.length > 0) {
                res.send(result);
              }
            });
          }
        );
      }
    });
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

// 訂單紀錄
app.get("/member/orderdetail", function (req, res) {
  const sqlSelect =
    "SELECT a.order_no, b.product_id, b.name, b.amount, b.size, b.brand, b.color, b.price " + 
    "FROM cool_order a , cool_order_detailed b " +
    "WHERE a.id = b.order_id AND a.member_no = ? ";
  db.query(sqlSelect, [req.query.memberNo], (err, result, fields) => {
    res.send(result);
    // console.log(result)
  });
});

// 蒐藏清單
app.get("/member/favorites", function (req, res) {
  const sqlSelect =
    "SELECT favorites.id AS fav_ID,  product.id AS pro_ID, CONCAT(product.brand,'^',product.name) AS name, product.brand, product.price, product.image " +
    "FROM favorites " +
    "INNER JOIN product on favorites.product_no = product.id " +
    "WHERE favorites.member_no = ? AND favorites.valid = ? ";
  db.query(
    sqlSelect,
    [req.query.memberNo, req.query.valid],
    (req, result, fields) => {
      res.send(result);
      // console.log(result);
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
    "SELECT name, account, password, phone, email, address, DATE_FORMAT(birth, '%Y-%m-%d') as birth, type " +
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

//優惠券
app.get("/member/coupon", function (req, res) {
  const sqlSelect =
    "SELECT * FROM coupon " +
    "WHERE coupon.code NOT IN (SELECT cool_order.coupon FROM cool_order WHERE cool_order.member_no = ?) " +
    "ORDER BY coupon.amount DESC ";
  db.query(sqlSelect, [req.query.id], (req, result, fields) => {
    res.send(result);
  });
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

//news
app.get("/news/:id", function (req, res) {
  db.query(
    "SELECT * FROM  page_data" + "WHERE news_id = ? ORDER BY category",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(JSON.stringify(result));
    }
  );
});

app.listen(3001, () => {
  console.log("port 3001");
});
