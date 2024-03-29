console.log("Instanciando uma API REST");


const user = require('./controllers/User');

var express = require('express');
var bodyParser = require('body-parser')
var app = express(); // Executo a função express e guardo na var app 

app.use(bodyParser.urlencoded({ extended: false })) //Mideware 
app.use(bodyParser.json()) // É pra configurar o reconhecimento do Body Json 

app.get('/users', users); //Crio a rota 

async function users(req, res){ 
    try {
        var userList = await user.getUsers(); // Lista de Usuarios 
        res.send(userList); 
    } catch (error) {
        res.send(error)
    }
    
}

app.post('/user',async function(req,res){
    try {
        const {usuario, senha, img} = req.body;
        await user.setUser(usuario,senha)            
        res.send({"msg":"Usuário Salvo com Sucesso!"});
    } catch (err) {
        res.send({"msg":"Usuário não Salvo",err})
    }   
});

 


app.listen(8086,function(){
    console.log("Servidor ativo  no porta 8085"); 
});