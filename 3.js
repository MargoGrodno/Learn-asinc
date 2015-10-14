function isStrIsNumber(str) {
	var flag= true;
	for(var i=0; i<str.length;i++){
		if(str[i] < '0'  || str[i] > '9'){
			flag = false;
			if(str.length!=1 && i==0 && str[i]=='-'){
				flag = true;
			}
		}
	}					// Не уверена что так делать верно, но мне нужно как-то определить является ли символ цифрой. 
	return flag;	// вариант когда просто по typeof  для случая с цифрой в виде чара не срабатывает.
}

var variables = [{
	type: 'variable',
	name: 'a',
	value: undefined
},{
	type: 'variable',
	name: 'b',
	value: undefined
},{
	type: 'variable',
	name: 'c',
	value: undefined
}];

var v = {
	type: 'variable',
	name: 'a',
	value: undefined
};

var readline = require('readline');

function takeValueOfVariables (variables, indexFrom, continueWith) {
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

	console.log('Enter value for variable '+variables[indexFrom].name);
	
	rl.on('line', function (incomingStr) {
		if(isStrIsNumber(incomingStr)){
			rl.close(); 

			variables[indexFrom].value = Number(incomingStr);
			console.log('now ' + variables[indexFrom].name + ' = ' + variables[indexFrom].value);
			
			if (indexFrom+1 < variables.length){
				takeValueOfVariables(variables,indexFrom+1, continueWith)
			} else{
				continueWith();
			}
		}
		else{
			console.log(incomingStr +' is not a number');
		}
	});
};

/*takeValueOfVariables(variables,0, function (argument) {
	console.log('end');
});*/


module.exports = {
	takeValueOfVariables:takeValueOfVariables
};

/*
function print (arg, fun) {
	console.log(arg + '  output1');	
	arg = arg+'1';
	fun(arg, function  (response) {	
		response = response +'3';
		console.log(response + '  output2');
		if(response.length < 20){
			print(response, fun);	
		}
	});
}

print(a, function (arg,responseFunction) {
	arg =arg+'2';
	console.log(arg  + '  output3');
	setTimeout(function() {
		console.log('  ');
		responseFunction(arg);
	},1000);
});

*/


/*
function f(loopCtx, variableRequest) {
	console.log(loopCtx.a);

	variableRequest(loopCtx.a, function responseFn(response){
		f(loopCtx.a = response);
	});
}

f(ctx, function variableRequest(name, responseFn) {
	responseFn(name + name);
});
*/