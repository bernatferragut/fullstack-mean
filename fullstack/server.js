//5 const to initialize the server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Server static files
app.use(express.static(path.join(__dirname, 'dist')));

//Set our API routes
//app.use('/api', api);

//Return other routes to Angular index file...
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html'));});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server
const server = http.createServer(app);

//Liste the port
server.listen(port, () => console.log(`Running on localhost: ${port}`));
