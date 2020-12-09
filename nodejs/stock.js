const express = require('express')
const path = require("path")
const mysql = require('mysql')
const db = mysql.createConnection({
host: '46.101.33.73',
user: 'stockShow',
password: 'stockShowdb',
database: 'stock2'
})
db.connect()
const app = express()
app.set('views', path.join(__dirname, 'html'))
app.set('view engine', 'ejs')
// Select Data
app.get('/orders_item', (req, res) => {
let sql = 'SELECT * FROM orders_item'
let query = db.query(sql, (err, results) => {
if (err) throw err
console.log(results)
res.json(results)
})
})
app.get('/', (req, res) => {
res.render('index')
})
// Select Data
app.get('/products2', (req, res) => {
let sql = 'SELECT * FROM products2'
let query = db.query(sql, (err, results) => {
if (err) throw err
console.log(results)
res.json(results)
})
})
app.get('/product', (req, res) => {
res.render('product')
})
app.listen('80', () => {
console.log('Server is running...')
})