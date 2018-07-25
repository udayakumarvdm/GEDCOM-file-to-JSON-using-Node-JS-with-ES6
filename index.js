import http from 'http';
import fs from 'fs';
import path from 'path';
import gedcom from 'parse-gedcom';

console.log(`🚀 Launched in localhost:8080`);

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  fs.readFile(path.resolve(__dirname)+'/ged/ft.ged','utf-8',(err, data) => {
    var jsonArrayObj = JSON.stringify(gedcom.parse(data), null, 2); 
    res.end(jsonArrayObj);
  });
}).listen(8080);
