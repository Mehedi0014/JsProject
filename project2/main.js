let num1;
let num2;

num1 = prompt('Please Enter First Number');
num2 = prompt('Please Enter Second Number');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let rand = Math.floor(Math.random() * 11);

document.write(num1 + " + " + num2 + " = " + sum + '<br>');
document.write(num1 + " - " + num2 + " = " + sub + '<br>');
document.write(num1 + " * " + num2 + " = " + mul + '<br>');
document.write(num1 + " / " + num2 + " = " + div + '<br>');

document.write("you will get point : " + rand);


