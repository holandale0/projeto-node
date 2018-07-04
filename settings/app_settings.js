const express = require('express');
const http = require("http");
const bodyParser = require("body-parser");
const cors = require('cors');
// const winston = require('winston');
const app = module.exports =  express();
  



//HTTP METHODS
app.use(function(err,req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
	next();
});

//apidoc
//// apidoc -i ./ -e node_modules/ -o public/apidoc
app.use(express.static('public'));
app.use(cors());


// parser POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


/*
//LOGS
const logger = winston.createLogger({
	transports: [

		new winston.transports.File({
			level: 'info',
			filename: 'api-fleury-novo-agendamento.log',
			handleExceptions: true,
			json: true,
			maxsize: 50000000, //50MB
			maxFiles: 1,
			colorize: false
		}),
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

logger.stream = {
	write: function (message, encoding) {
		logger.info(message);
	}
};

app.use(require("morgan")("combined", {
	"stream": logger.stream
}));

*/

// SERVER
var server = http.createServer(app);
var port = process.env.SERVER_PORT || 8000;
//var port = Number(process.env.PORT|| 8000);

server.listen(port, function () {
	console.log('API Fleury Saúde Ocupacional server start in port %s', port);
});


