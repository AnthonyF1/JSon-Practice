/*
   CIS 131 Web Dev II
   Node, NPM and jSon Practice

   Author: Anthony Forte
   Date: 11/1/2018

   Filename: readfile.js
*/

//Variables for lodash, jsonfile, and jsonfile/data.json
var _ = require('lodash'); 
var jsonfile = require('jsonfile');
const file = 'data.json'; //const variable for jsonfile access

//Code to readfile using the packages
jsonfile.readFile(file, function(err, data) {  
    console.log("");
    console.log("Information from the file below:");
    console.log("________________________________")
    console.log("");
    for (i = 0; i < data.items.length; i++) { 
        _.forEach(data.items[i], function(value) { //lodash print to console
            console.log(value);
        });
        console.log(""); //add a space between arrays
    };
});
