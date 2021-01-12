const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const db = mysql.createPool({
  host: "localhost",
  user: "cool",
  password: "12345",
  database: "cool",
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get("/member/order/:status", function (req, res) {
  //   console.log(req.params.status);
  let status = ""
  if ("processing" === req.params.status) status = 1
  if ("solved" === req.params.status) status = 2
  if ("refundlist" === req.params.status) status = 3
  const sqlSelect = "SELECT * FROM cool_order WHERE status = ? "
  db.query(sqlSelect, [status], (err, result, fields) => {
    res.send(result)
  })
})

app.get("/member/favorites", function (req, res) {
  const sqlSelect = "SELECT member_no,product_no,valid,'/images/product/product-0001.png' as image FROM favorites WHERE member_no = ? AND valid = ? "
  db.query(sqlSelect, [req.query.memberNo, req.query.valid], (req, result, fields) => {
    res.send(result)
  })
})

app.listen(3001, () => {
  console.log("port 3001")
})
