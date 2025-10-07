//1

var number =+window.prompt("Enter a number:");
console.log("Output:", number);
//***************************/

//2

// var number = Number(window.prompt("please Enter a number:"));
// if (number % 3 === 0 && number % 4 === 0) {
//   console.log("Output: Yes");
// } else {
//   console.log("Output: No");
// }

//******************************/

//3

// var num1 = +window.prompt("Enter first number:");
// var num2 = +window.prompt("Enter second number:");
// var max = Math.max(num1, num2);
// console.log("Output:", max);

//******************************/

//4

// var number = +window.prompt("Enter an integer:");
// if (number < 0) {
//   console.log("Output negative");
// } else {
//   console.log("Output positive");
// }

//*****************************/

//5


// var num1 = +window.prompt("Enter first number:");
// var num2 = +window.prompt("Enter second number:");
// var num3 = +window. prompt("Enter third number:");

// var max = Math.max(num1, num2, num3);
// var min = Math.min(num1, num2, num3);

// console.log("max element = " + max);
// console.log("min element="+min);


//*****************************/

// 6

// var number = +prompt("Enter an integer number:");
// if (number % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }

//8

// var char = window.prompt("Enter a character:");
// char = char.toLowerCase();
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }
//******************************/

//9

// var number = parseInt(prompt("5:"));
// if (!isNaN(number) && number > 0) {
//   var output = "";
//   for (var i = 1; i <= number; i++) {
//     output += i;
//     if (i !== number) {
//       output += ", ";
//     }
//   }
//   console.log("Output:", output);
// } else {
//   console.log("5");
// }

//******************************/

//10

// var number = +window. prompt("Enter an integer number:");
// for (var i = 1; i <= 12; i++) {
//   console.log(number*i);
//  }


//******************************/


//11
// var number = +window.prompt("15");
// if (!isNaN(number) && number > 1) {
//   var evenNumbers = "";

//   for (var i = 2; i < number; i += 2) {
//     evenNumbers += i + " ";
//   }

//   console.log("Output:", evenNumbers);
//   window. alert("Output: " + evenNumbers);
// } else {
//   window. alert("15");
// }



//******************************/


// 12-a

// var base =  window.prompt("Enter the base number:");
// var exponent = window.prompt("Enter the exponent number:");
// var result = base ** exponent;
// console.log(result);



//******************************/

//12-b


// var marks = [95, 76, 58, 90, 89]; 
// var total = 0;
// for (var i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// var average = total / marks.length;
// var percentage = (total / (marks.length * 100)) * 100;

// console.log("Total Marks = " + total);
// console.log("Average Marks = " + average);
// console.log("Percentage = "+percentage);


//******************************/

//13

// var month = +window.prompt("Enter month number (1-12):");
// var days;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28;
//     break;
//   default:
//     console.log("Invalid month number!");
// }

// if (days) {
//   console.log("Days in Month:"+days);
// }

//******************************/


// 14

// var physics = +window.prompt("Enter marks for Physics:");
// var chemistry =+ window. prompt("Enter marks for Chemistry:");
// var biology = +window.prompt("Enter marks for Biology:");
// var mathematics =+window.prompt("Enter marks for Mathematics:");
// var computer = +window.prompt("Enter marks for Computer:");
// var total = physics + chemistry + biology + mathematics + computer;
// var percentage = (total / 500) * 100;
// var grade;
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else if (percentage >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log("Total Marks: " + total);
// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Grade: " + grade);

//******************************/


//15

// var month = prompt("Enter month number (1-12):");
// switch (month) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//     alert("31 days");
//     break;

//   case "4":
//   case "6":
//   case "9":
//   case "11":
//     alert("30 days");
//     break;

//   case "2":
//     alert("28 or 29 days");
//     break;

//   default:
//     alert("Invalid monthnumber");
// }


//******************************/

//16

// var ch = prompt("Enter an alphabet:");
// switch (ch) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log(ch + " is a vowel");
//     break;
//   default:
//     console.log(ch + " is a consonant");
// }

//******************************/

// 17


// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// switch (true) {
//   case num1 > num2:
//     alert(num1 + " is greater");
//     break;

//   case num2 > num1:
//     alert(num2 + " is greater");
//     break;

//   default:
//     alert("Both numbers areequal");
// }

//******************************/

// 18


// var num = Number(prompt("Enter a number:"));
// switch (num % 2) {
//     case 0:
//         console.log(num + " is even");
//         break;

//     case 1:
//     case -1:
//         console.log(num + " is odd");
//         break;

//     default:
//         console.log("Invalid input");
// }


//******************************/

// 19

// var num = Number(prompt("Enter a number:"));
// switch (true) {
//   case (num > 0):
//     console.log(num + " is positive");
//     break;

//   case (num < 0):
//     console.log(num + " is negative");
//     break;

//   case (num === 0):
//     console.log("The number is zero");
//     break;

//   default:
//     console.log("Invalid input");
// }


//*****************************/

// 20

// var num1 = Number(prompt("Enter first number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var num2 = Number(prompt("Enter second number:"));
// var result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;

//   case "-":
//     result = num1 - num2;
//     break;

//   case "*":
//     result = num1 * num2;
//     break;

//   case "/":
//     result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//     break;

//   default:
//     result = "Invalid operator!";
// }
// alert("Result:"+result);


//*****************************/