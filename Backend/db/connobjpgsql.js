const pool = require('pg').pool;
function connectionObj(){
    return  pool= new pool({
        user : 'postgres',
        host : 'localhost',
        database : 'mydbexpress',
        password : 'joshan1234',
        port : 5432,
        max : 100
    });
    return pool;

}
module.exports = {connectionObj};