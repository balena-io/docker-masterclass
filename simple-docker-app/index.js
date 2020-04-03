const Express = require('express');
const bodyParser = require('body-parser');

// Start a simple express server that just echoes whatever is sent to it
const app = new Express();
app.use(bodyParser.text());

app.post('/echo', (req, res) => {
	// Get the body out
	console.log(`Echoing ${req.body}...`);
	res.send(`${req.body}\n`);
});

app.listen(9854, () => {
	console.log('Echo server is up and listening...');
});
