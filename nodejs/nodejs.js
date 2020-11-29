const express = require('express') // เรียกใช้ Express
const mysql = require('mysql') // เรียกใช้ mysql
const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
host     : '46.101.33.73', 
user     : 'stockShow',
password : 'stockShowdb',
database : 'stock2'
})
db.connect() // เชื่อมต่อฐานข้อมูล
const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
// Select Data
app.get('/users',(req,res)=> {   // Router เวลาเรียกใช้งาน
let sql = 'SELECT * FROM orders_item'  // คำสั่ง sql
let query = db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
if(err) throw err  // ดัก error
console.log(results) // แสดงผล บน Console 
res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
})
})
app.listen('3000',() => {     // 
console.log('start port 3000')  
})