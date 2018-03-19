import http from 'http';
import fs from 'fs';
import path from 'path';
import gedcom from 'parse-gedcom';


http.createServer((req, res) => {
	fs.readFile(path.resolve(__dirname)+'/ged/ft.ged','utf-8',(err, data) => {
		var jsonArrayObj = JSON.stringify(gedcom.parse(data), null, 2);	
		res.write(jsonArrayObj);
	});
}).listen(8080);
