const mysql = require('mysql2');
const conecta = mysql.createConnection
(
{
host: 'localhost', // endereço banco
user: 'root', // usuário padrão
database: "exerciciodb"
}
);
module.exports = {conecta}
