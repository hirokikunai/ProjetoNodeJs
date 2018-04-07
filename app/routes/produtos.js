module.exports = function(app){
	app.get('/produtos', function(resquest,response){
		var mysql = require('mysql');
		var connection = mysql.createConnection();({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo'
		});
		

		connection.query('SELECT * FROM livros',function(err,results){
			respose.send(results);
		});

		connection.end();

		response.render("produtos/lista");
	});

}