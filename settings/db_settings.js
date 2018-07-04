//MSSQL
var db = exports.mssql = require('mssql');

//PARÂMETOS DE CONEXÃO
var usr = exports.user = process.env.SERVER_BDCORP_USER || 'sa';
var pas = exports.password = process.env.SERVER_BDCORP_PASSWORD || 'sa';
var srv = exports.server = process.env.SERVER_BDCORP_HOST || 'localhost';
var drv = exports.driver = 'tedious';
var dbs = exports.database = process.env.SERVER_BDCORP_DATABASE || 'teste';
var prt = exports.port = process.env.SERVER_BDCORP_PORT || 1433;
var opt = exports.options = { encrypt: true };

//CONFIGURAÇÃO DA CONEXÃO - PONTE -  mssql
var conf = { user: usr, password: pas, server: srv, driver: drv, database: dbs, port: prt, options: opt };

//Teste de conexão
exports.connect = function (callback) {
    callback = callback || function () { };
    var conn = new db.ConnectionPool(conf);
    conn.connect()
        .then(function () {
            console.log('');
            console.log('Conexão bem sucedida.');
        })
        .catch(function (err) {
            console.log('');
            console.log('Erro ao tentar estabelecer conexão com banco de dados.');
            console.log(err);
            callback(err);
        });
};



