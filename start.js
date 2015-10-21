
var readline = require('readline');
var utils = require('./takeVarValue')

var variables = []

utils.takeNamesOfVariables(variables, function (){ 
    utils.takeValuesOfArrayOfVariables(variables);
});