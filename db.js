const mysql = require('mysql2');
const conecta = mysql.createConnection
(
{
host: 'localhost', // endereço banco
user: 'root', // usuário padrão
database: "clientes"
}
);
module.exports = {conecta}
