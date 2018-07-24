# GEDCOM-file-to-JSON-using-Node-JS-with-ES6
### In 5 Steps

1. `git clone https://github.com/udayakumarvdm/GEDCOM-file-to-JSON-using-Node-JS-with-ES6.git`

2. `cd GEDCOM-file-to-JSON-using-Node-JS-with-ES6`

3. `npm install`

4. `npm start`

5. Open your favorite browser in `localhost:8080`

Description:
	This simple code will return the gedcom file to json using ES6.

Usage:
------------------
app.js
------------------
1. Set the Babel Register, To Convert your Ecmascript 6 code to ecmascript 5.
---------------------------------------------------
    require('babel-register')({
       presets: [ 'env' ]
    });

2. Define the module(s), Where we use ES6.
------------------------------------------
	  require('./index.js');

index.js
------------------
1. import the header files.
--------------------------------
    import http from 'http'; 	    /*--- The HTTP module can create an HTTP server, It listen to server port 8080 ---*/
    import fs from 'fs'; 		    /*--- Import File systems module -----*/
    import path from 'path';	    /*--- Import Path module ------*/
    import gedcom from 'parse-gedcom';  /*--- Parse ged file use gedcom parse module ----*/

2. Define the method using Arrow function.
--------------------------------------------
    http.createServer((req, res) => {
      fs.readFile(path.resolve(__dirname)+'/ged/ft.ged','utf-8',(err, data) => {
        var jsonArrayObj = JSON.stringify(gedcom.parse(data), null, 2);	
        res.write(jsonArrayObj);
      });
    }).listen(8080);
