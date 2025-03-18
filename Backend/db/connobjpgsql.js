const Pool = require('pg').Pool;
function connectionObj(){
    return  new Pool({
        user : 'postgres',
        host : 'localhost',
        database : 'mydbexpress',
        password : 'Jkm1234',
        port : 5432,
        max : 100
    });
    return Pool;

}
module.exports = {connectionObj};