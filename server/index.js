const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('Hello World3');
});

app.listen(port, () => {
	console.log(`app is listening in port ${port}`);
});
