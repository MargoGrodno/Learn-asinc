
var readline = require('readline');
var utils = require('./3')

var variables =[]

function takeVariableName () {
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

	console.log('Enter variable name : ');
	
	rl.on('line', function (incomingStr) {
		variables.push({
			type: 'variable',
			name: incomingStr,
			value: undefined
		});
		rl.close();
		utils.takeValueOfVariables(variables,0, function (argument) {
			console.log('end');
		});
	});
};

takeVariableName();