const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get('/', (_, response) => {
	response.json({info: 'NODE.js, Express, and Postgres API'});
});

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});