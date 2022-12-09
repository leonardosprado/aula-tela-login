//node js
// Não estamos usando o motor do navegador. 

const dataBaseUrl =  process.env.DATA_BASE_URL; //Variavel de ambiente
const dataBaseUser = process.env.MYSQL_USER ;
const dataBasePass = process.env.MYSQL_PASSWORD ;
const dataBaseName = process.env.MYSQL_DATABASE ;
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: dataBaseUrl,
        user: dataBaseUser,
        password: dataBasePass,
        database:dataBaseName
    });
    console.log("Conectou no MySQL!"); 
    global.connection = connection; 
    return connection;
}

module.exports = connect;
///Diferenca entre sincrono e assincrono: Atividade para Casa

//Express node js 

// var express = require('express');

// var app = express();

// app.get('/',async function(req,res){
//     var data = await selectCustomers();
//     return res.send(data);
// });


// app.listen(9090,function(){
//     console.log("Servidor ativo no porto 9090");
// });