const express = require ("express");
const mysql = require  ("mysql");
const server = express("")
const  mysqlConnection =  mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba',

})

mysqlConnection.connect((error)=> { 
    if (!!error){
        console.log ("error de conexion")

    }
    else {
        console.log ("escuchando la base")
    }
 })

 server.get("/", (req, resp)=>{
    mysqlConnection.query("SELECT * FROM  books", function(error, rows, field){

        if(!!error){
            console.log('error el query esta vacio')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});

server.get("/books", (req, resp)=>{
    mysqlConnection.query("SELECT * FROM  books", function(error, rows, field){

        if(!!error){
            console.log('error el query esta vacio')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});
 
server.listen(3000)