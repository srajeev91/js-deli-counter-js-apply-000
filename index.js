<<<<<<< HEAD
var katzDeli = [];

function takeANumber (katzDeliLine, name) {
=======

var katzDeli = [];

function takeANumber(katzDeliLine, name){
>>>>>>> b77e1f01f46841455865bf54bf5f4dd9664b5cdf
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

<<<<<<< HEAD
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
=======
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
>>>>>>> b77e1f01f46841455865bf54bf5f4dd9664b5cdf
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

<<<<<<< HEAD
function currentLine(line) {
    var myArray = [];
    
    if (line.length === 0) {
    return "The line is currently empty.";
    
    } else {
      for (let i = 0; i < line.length; i++){
         myArray.push(` ${i+1}. ${line[i]}`);
      }
    }
    return "The line is currently:" + myArray;
=======
function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++){
    if (katzDeliLine.length === 0) {
      return 
    }
  }
>>>>>>> b77e1f01f46841455865bf54bf5f4dd9664b5cdf
}