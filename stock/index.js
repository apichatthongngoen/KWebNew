//import
var mysql = require('mysql');

//creat connection
var con = mysql.createConnection({
    host: "46.101.33.73",
    user: "stockShow",
    password: "stockShowdb",
    database: "stock2"
});

//connect db
con.connect(function(err){
    if (err) throw err;
    console.log("Connection!");
    sql = "select * from orders_item";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log(result);
    });
});


 




