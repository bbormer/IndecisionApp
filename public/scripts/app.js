'use strict';

var nameVar = 'Eduardo';
var nameVar = 'Yesenia'; //with var we can redefine, so we could mistakenly do so and not have access to the first one anymore.
console.log('nameVar', nameVar);

var nameLet = 'Eduardo';
nameLet = 'Yesenia'; // with let we cannot redefine, so there is no problem.
console.log('nameLet', nameLet);

var nameConst = 'Eduardo'; // Like with let, we cannot redefine it, but neither can we reassign
console.log('nameConst', nameConst);
