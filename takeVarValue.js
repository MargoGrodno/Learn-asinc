function isStrIsNumber(str) {
    var regex = new RegExp(/^[-|+]?[0-9]+(\.[0-9]*)?$/);
    return regex.test(str);
}

function printVariable(variable) {
    console.log('variable ' + variable.name + ' now is ' + variable.value);
}

function createRL() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    return rl;
}

function takeVariableName(continueWith) {
    var rl = createRL();
    console.log('Enter variable name : ');
    rl.on('line', function(incomingStr) {
        rl.close();
        continueWith(incomingStr);
    });
};


function takeNamesOfVariables(variables, continueFn) {

    function continueWith(incomingName) {

        if (incomingName != 'exit') {
            variables.push({
                type: 'variable',
                name: incomingName,
                value: undefined
            });
            takeVariableName(continueWith)
        } else {
            console.log('now we will reed values for variables');
            continueFn();
        }
    }

    takeVariableName(continueWith);
};

function takeVariableValue(variableName, continueWith) {
    var rl = createRL();

    console.log('Enter value for variable ' + variableName);

    rl.on('line', function(incomingStr) {
        if (isStrIsNumber(incomingStr)) {
            rl.close();
            continueWith(Number(incomingStr));
        } else {
            console.log(incomingStr + ' is not a number');
        }
    });
};

function takeValuesOfArrayOfVariables(varArr) {

    function continueWith(value) {
        varArr[i].value = value;
        if (i < varArr.length - 1) {
            i++;
            takeVariableValue(varArr[i].name, continueWith)
        } else {
            for (v in varArr) {
                printVariable(varArr[v]);
            };
        }
    }

    var i = 0;

    takeVariableValue(varArr[i].name, continueWith);
};

module.exports = {
	takeNamesOfVariables:takeNamesOfVariables,
	takeValuesOfArrayOfVariables: takeValuesOfArrayOfVariables
};