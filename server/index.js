const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

//express에서 client측 build폴더까지의 경로를 static하게 지정
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
