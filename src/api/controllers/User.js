

const db = require('../database/banco.js');

async function getUsers(){
    var conn = await db(); // Conecta ao Banco  
    const [rows] = await conn.query('SELECT * FROM user;'); //----
    // conn.end();
    // console.log(rows)
    return rows; 

}
async function setUser(usuario,senha,img){
    var conn = await db();
    let query = `INSERT INTO user (usuario,senha,img) VALUES (?);`; 
    let values = [usuario, senha,img];


    return await conn.query(query,[values],(err,rows)=>{
        if(err){throw err}
        console.log("all Rows Inserted");
        return rows;
    })
    // conn.end();


}
module.exports = {getUsers, setUser};