let express = require('express');

let github = require('./github.js');

main();

function main() {
	let app = express();

	app.use('/github', github);

	let port = 3000;

	app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	});
}