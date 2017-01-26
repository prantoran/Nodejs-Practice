var greet = require('./greet3'); //there is no greet3.js so it will
//look for greet folder

greet.english();
greet.spanish();

//Topic: Module Patterns

//pattern 1
var greet1 = require('./greet_mp.js');
greet1();

//pattern2
var greet2 = require('./greet2_mp.js');
greet2.greet();
var greet2_2=require('./greet2_mp.js').greet;
greet2_2(); 

//pattern3
var greet3 = require('./greet3_mp.js');
greet3.greet();

greet3.greeting = 'Changed hello greet3_mp';

var greet3b = require('./greet3_mp.js');
greet3b.greet();
//console.log value changes due to assignment,
//require of greet3b returned the same object
//it is because the first time greet3)mp.js was
//required, it was stored in Module.cache


//pattern4
var greet4 = require('./greet4_mp.js');
var grtr = new greet4();
grtr.greet();

//pattern5: the revealing module pattern
var greet5 = require('./greet5_mp.js');
greet5.greet();