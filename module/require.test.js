'use strict'
const fileName = './export.js';
const obj = require(fileName);
console.log(this);
function a(){
    console.log(this);
}
a();