const path = require('path');
const execFile = require('child_process').execFile;

main();

function main() {
	const binaryPath = path.join(__dirname, 'cli_avg');

	execFile('hostname', ['-I'], (err, stdout, stderr) => {
		if (err) {
			throw err;
		}
		console.log(stdout);
	});
}