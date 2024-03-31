"use strict";
const ps=require("prompt-sync");
const prompt=ps();
var array=[];
var i;
for(i=1;i<=5;i++)
{   
    var x=prompt();
    array.push(x);
} 
console.log(array);
