const config = require('./config')[process.env.NODE_ENV];
const express = require('express');
const http = require('http');

const app = express();
const port = config.PORT;
// const router = express.Router();
const cors = require('cors');

//cors
let corsOptions = {
	origin: '*', 
	credential: true, 
};

app.use(cors(corsOptions));

//autoRouter
const autoRoute = require('./autoRoute');
autoRoute('/api',app);

// const todoRouter = require('./api/todo')
// app.use('/api',todoRouter);

//server
const webServer = http.createServer(app);
webServer.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})