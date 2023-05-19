// ES module
// import { getNumber, getTitle } from './script.mjs';

// commonjs module
const { getNumber, getTitle } = require('./script.js');


console.log(getNumber());
console.log(getTitle());