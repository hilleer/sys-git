let express = require('express');

let ping = require('./ping');
let calc = require('./calc');

main();

function main() {
	let app = express();

	app.use('/ping', ping);
	app.use('/calc', calc);

	let port = 3000;
	app.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});

}