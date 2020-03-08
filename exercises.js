//Codewars 8kyu katas

/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor.
Moreover, your function should work for basement floors too: just return the same value as the passed one.*/

function getRealFloor(n) {
  if (n === 0) {return 0;}
  if (n >= 13) {return n-2;}
  if (n > 0 && n < 13) {return n-1;}
  return n;
}

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

function squareSum(numbers){
 var result = 0;
 for (var i = 0; i < numbers.length; i++) {
   var n = numbers[i];
   result = result + (n * n);
 }
 return result;
}

/*The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.*/

function century(year) {
  // Finish this :)
  var s = String(year)
  var cen = Math.trunc(year / 100);
  if (s.lastIndexOf("00") !== s.length - 2) {
    cen = cen + 1;
  };
  return cen;
}

/*The wide mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.*/

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";

}


/*Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.*/


function past(h, m, s){
  //#Happy Coding! ^_^
  var ms = 0;
  ms = ms + (s * 1000);
  ms = ms + (m * 60 * 1000);
  ms = ms + (h * 60 * 60 * 1000);
  return ms;
}

/*Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/

function getGrade (s1, s2, s3) {
  // Code here
  var mean = (s1 + s2 + s3) / 3;
  var grade;
  if (mean >= 90) { grade = "A"; }
  else if (mean >= 80) { grade = "B"; }
  else if (mean >= 70) { grade = "C"; }
  else if (mean >= 60) { grade = "D"; }
  else { grade = "F"; }
  return grade;
}

/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.*/

function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
    return longest;
}

/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.*/

function isDivisible(n, x, y) {
return n % x === 0 && n % y === 0;
}


/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)*/

function generateRange(min, max, step){
    var ar = [];
    var n = min;
    while (n <= max) {
      ar.push(n);
      n = n + step;
    }
    return ar;
    
}

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
 //You got this!
    var ultima = str.length - 1;
    var corte = str.substring(1, ultima);
    return corte;
};

/*Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().*/

function expressionMatter(a, b, c) {
  var o1 = a + b + c;
  var o2 = a * b * c;
  var o3 = a * (b + c);
  var o4 = (a +b) * c;
  
  return Math.max(o1, o2, o3, o4);// highest achievable result
  
}


/*Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.*/

function digitize(n) {
  //code here
  return Array.from(String(n)).map(Number).reverse();
}

/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.*/

function monkeyCount(n) {
// your code here
var count = [];
for (i = 1; i <= n; i++) {
  count.push(i);
}
return count;
 
}

/*Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  var total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return total;
}


/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

function sumMix(x){
    return x.reduce(function (total, n) { return total = total + Number(n); }, 0);
    
    
}

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.*/

function between(a, b) {
  // your code here
  var ar = [];
  for (var n = a; n <= b; n++) { ar.push(n); }
  return ar;
}

/** No Loops Allowed *

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.*/

function smallEnough(a, limit){
  return Math.max.apply(null, a) <= limit;
}

/** No Loops Allowed *

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.*/

function check(a,x){
  return a.filter(function(el) { return el === x }).length >= 1;
};

/*Very simple, given a number, find its opposite*/

function opposite(number) {
  //your code here
  if(number > 0) {return -number}
  return Math.abs(number);
}

/*Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance = how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

If you make it, return "Alive!", if not, return "Shark Bait!".*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   var timeToPontoon = pontoonDistance / youSpeed;
   sharkSpeed = dolphin ? (sharkSpeed / 2 ) : sharkSpeed;
   var timeToDie = sharkDistance / sharkSpeed;
   if(timeToPontoon > timeToDie)
   { return "Shark Bait!" }
    return "Alive!";
   
}

/*Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. */

function xor(a, b) {
  var bothTruthy = a && b;
  var bothFalsy = !a && !b;
  
  if(bothTruthy || bothFalsy) { return false }
  
  return true;
  
  }

  /*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.*/

function paperwork(n, m) {
  if (n <= 0 || m <= 0) { return 0; }
  return m * n;
}


/*Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.*/

function isValid(f){
  //coding and coding..
  if(f.includes(1) && f.includes(2)) { return false; }
  if(f.includes(3) && f.includes(4)) { return false; }
  if(f.includes(5) && !f.includes(6)) { return false; }
  if(!f.includes(5) && f.includes(6)) { return false; }
  if(!f.includes(7) && !f.includes(8)) { return false; }
  
  return true;
}

/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

function well(x){
  var goodsN = x.filter(function(e) { if(e === "good") { return true;} return false; }).length

 if(goodsN === 1 || goodsN === 2) { return "Publish!"}
 if(goodsN >= 3) { return "I smell a series!"}
  return "Fail!";
 
}

/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0*/

var summation = function (num) {
  var sum = 0;
  for(var n = 1; n <= num; n++) {
   sum = sum +n;
  }
  
  return sum;
}

/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/

function howMuchILoveYou(nbPetals) {
    // your code
    var n = nbPetals % 6;
    
    var arr = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
    
   return arr[n];  
}

/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

function checkForFactor (base, factor) {
  
  if(base % factor === 0) {
    return true;
  }
  return false;
}

/*Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.*/

function take(arr, n) {
  
  return arr.slice(0, n);
}

/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case  return
name equals owner 'Hello boss'
otherwise 'Hello guest'*/

function greet (name, owner) {
  if(name === owner) {return "Hello boss";}
   return "Hello guest";

}






























