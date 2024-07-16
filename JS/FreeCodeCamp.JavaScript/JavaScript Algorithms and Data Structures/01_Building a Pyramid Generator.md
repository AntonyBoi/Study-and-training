Learn Introductory JavaScript by Building a Pyramid Generator

**Step 1**
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

**Step 2** Variables
let, const, var
let exampleVariable; - declaration of variable.
let character;
Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

**Step 3** Initialisation of Variables (assignin value at the same moment of declaration)
let character = "Hello";

**Step 4** Data types. String
JavaScript has seven primitive data types, with String being one of them. In JavaScript, a string represents a sequence of characters and can be enclosed in either single (') or double (") quotes.

Note that strings are immutable (??????), which means once they are created, they cannot be changed. The variable can still be reassigned another value.

Change your "Hello" string to use single quotes.
let character = 'Hello';

**Step 4** Console.log

**Step 5** 
The console allows you to print and view JavaScript output. You can send information to the console using console.log(). For example, this code will print "Naomi" to the console:

Example Code
let developer = "Naomi";
console.log(developer);
The code above accesses the developer variable with its name in the console.log(). Note that the value between the parentheses is the value that will be printed.

Print the value of the character variable to the console. Then, click the "Console" button to view the JavaScript console.
let character = 'Hello';
console.log(character);


**Step 6** Reassigning variables
When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on. In this example, the value of programmer is changed from "Naomi" to "CamperChan".

Example Code
let programmer = "Naomi";
programmer = "CamperChan";
Note that when reassigning a variable, you do not use the let keyword again.

After your console.log, assign the value "World" to your character variable.
let character = 'Hello';
console.log(character);
character = "World";

**Step 7**
Now log your character variable to the console again. You should see the string "Hello", then the string "World", in the console.
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);

**Step 8**
When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is camel case.

Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased. Here are some examples of camel case:

Example Code
let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;
Use camel case to declare a new secondCharacter variable.

let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;

**Step 9**
When you declare a variable without initializing it, it is considered uninitialized. Currently, your secondCharacter variable is uninitialized.

Add a console.log() to see what the value of your secondCharacter variable is.
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);

**Step 10**
The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.

You can still assign a value to an uninitialized variable. Here is an example:

Example Code
let uninitialized;
uninitialized = "assigned";
Assign the string "Test" to your secondCharacter variable below your declaration. Open the console to see how your log has changed.
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = "Test"

console.log(secondCharacter);

**Step 11**
You can also assign the value of a variable to another variable. For example:

Example Code
let first = "One";
let second = "Two";
second = first;
The second variable would now have the value "One".

To see this in action, change your secondCharacter assignment from "Test" to your character variable.

Then open the console to see what gets logged.
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;

**Step 12**
You are now ready to declare your next variable. Remove both console.log statements, and the character reassignment.

Also remove your secondCharacter variable, but leave the character initialization unchanged.


**Step 13**
Before moving forward, you should take a moment to review the concepts you have learned.

Use the let keyword to declare a profession variable and an age variable. Initialize profession with the string "teacher", but do not initialize age with any value.

Log both of your variables to the console to see the results.

let profession = "teacher";
let age;
console.log(profession);
console.log(age);

**Step 14**
Now that you have reviewed declaration and initialization, remove the code you wrote for your review.

Do not remove your character variable.

**Step 15**
Use let to declare a count variable. Assign it the number 8. When using a number value, you do not use quotes. For example:

Example Code
let money = 100;
let character = 'Hello';
let count = 8;

**Step 16**
With the number data type, you can perform mathematical operations, like addition. Try printing count + 1 to the console.
let character = 'Hello';
let count = 8;
console.log(count + 1)

**Step 17**
You can also perform subtraction (-), multiplication (*), and division (/). Feel free to experiment with the operators and numbers in your console.log. When you are ready to move on
let count = 8;
console.log(count / 2);
console.log(count - 2);
console.log(count * 2);

**Step 18**
In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an array.

An array is a non-primitive data type that can hold a series of values. Non-primitive data types differ from primitive data types in that they can hold more complex data. Primitive data types like strings and numbers can only hold one value at a time.

Arrays are denoted using square brackets ([]). Here is an example of a variable with the value of an empty array:

Example Code
let array = [];
Declare a rows variable and assign it an empty array.
let character = 'Hello';
let count = 8;
let rows = [];

**Step 19**
When an array holds values, or elements, those values are separated by commas. Here is an array that holds two strings:

Example Code
let array = ["first", "second"];
Change your rows declaration to be an array with the strings "Naomi", "Quincy", and "CamperChan". The order of values in an array is important, so follow that order. Remember that strings are case-sensitive.
let rows = ["Naomi", "Quincy", "CamperChan"];

**Step 20**
You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.

You can access the value using bracket notation, such as array[0].

Use console.log and bracket notation to print the first value in your rows array.
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0])

**Step 21**
Arrays are special in that they are considered mutable. This means you can change the value at an index directly.

For example, this code would assign the number 25 to the second element in the array:

Example Code
let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]
Update the third element of your rows array to be the number 10. Then print the rows array to your console.
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);

**Step 22**
Notice how the value inside your rows array has been changed directly? This is called mutation. As you learn more about arrays, you will learn when to mutate an array, and when you should not.

Before moving on, this is a great opportunity to learn a common array use. Currently, your code accesses the last element in the array with rows[2]. But you may not know how many elements are in an array when you want the last one.

You can make use of the .length property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:

Example Code
array[array.length - 1]
array.length returns the number of elements in the array. By subtracting 1, you get the index of the last element in the array. You can apply this same concept to your rows array.

Update your rows[2] to dynamically access the last element in the rows array. Refer to the example above to help you.

You should not see anything change in your console.

rows[rows.length - 1] = 10;

**Step 23**
For now, remove your first console log and your rows[rows.length - 1] assignment. Leave the second rows log statement for later.

**Step 24**
In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.

Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console.

After logging, change the last element of cities to the string "Mexico City", then log the cities variable again.

When done correctly, you should see this output in the console.

Example Code
[ "London", "New York", "Mumbai" ]
[ "London", "New York", "Mexico City" ]

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

**Step 25**
Now you are ready to move onto the next set of array lessons.

Remove all of your code from the previous step.

**Step 26**
A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.

Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

Example Code
array.push(12);
Use .push() to add the string "freeCodeCamp" to the end of your rows array. Add this code before your console.log so you can see the change you made to your array.

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);

**Step 27**
Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

Create a new variable called popped and assign it the result of rows.pop(). Then, log popped to the console.

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);

**Step 28**
You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - and you pushed "freeCodeCamp" to the end of the array earlier.

But what does .push() return? Assign your existing rows.push() to a new pushed variable, and log it.

**Step 29**
Were you expecting to see 4 in the console? .push() returns the new length of the array, after adding the value you give it.

It is important to be aware of what values a method returns. Take some time to experiment with .push() and .pop(). When you are ready, remove all of your .push() and .pop() calls, and your console.log statements.

**Step 30**
Change your rows declaration to be assigned an empty array again.

Also, change your 'Hello' string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project.

let character = "Hello";
let rows = [];

**Step 31**
Declaring a variable with the let keyword allows it to be reassigned. This means you could change character later to be a completely different value.

For this project, you will not want to change these variable values. So instead, you should use const to declare them. const variables are special.

First, a const variable cannot be reassigned like a let variable. This code would throw an error:

Example Code
const firstName = "Naomi";
firstName = "Jessica";
A const variable also cannot be uninitialized. This code would throw an error:

Example Code
const firstName;
Replace your let keywords with const.

const character = "Hello";
const count = 8;
const rows = [];

**Step 32**
You are now ready to start building your pyramid generator. Your character variable will serve as the building block for the pyramid.

"Hello" might not work very well for that. Change the value of character to be the hash character "#".

const character = "#";
const count = 8;
const rows = [];

**Step 33**
To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.

You are going to start with a basic for loop. for loops use the following syntax:

Example Code
for (iterator; condition; iteration) {
  logic;
}
In the upcoming steps, you'll explore each component of a loop in detail. For now, construct a for loop that includes the terms "iterator", "condition", and "iteration" for the three components. Keep the loop body, the section within the curly braces {}, empty.

for ("iterator"; "condition"; "iteration") {
  
}

**Step 348*
Your loop now needs a proper iterator. The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). For example, here is a for loop that declares an index variable and assigns it the value 100.

Example Code
for (let index = 100; "second"; "third") {

}
Replace the string "iterator" with a let declaration for the variable i. Assign it the value 0 to start. This will give the i variable the value 0 the first time your loop runs.

for (let i = 0; "condition"; "iteration") {

}

**Step 35**
The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

In JavaScript, a Boolean value can be either true or false. These are not strings - you will learn more about the difference later on.

For now, you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right. For example, count < 3 would evaluate to true if count is 2, and false if count is 4.

Replace your "condition" string with a condition to check if i is less than count.

for (let i = 0; i < count; "iteration") {

}

**Step 36**
Your iteration statement will tell your loop what to do with the iterator after each run.

When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, bees = bees + 3; would increase the value of bees by three.

Use that syntax to replace your "iteration" string with a reassignment statement that increases i by one.

for (let i = 0; i < count; i = i + 1) {

}

**Step 37**
Your loop should now run eight times. Inside the body of the loop, print the value of the i iterator and see what happens.
for (let i = 0; i < count; i = i + 1) {
console.log(i);
}

**Step 38**
You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.

Replace your log statement with a statement to push i to your rows array.
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

**Step 39**
Unfortunately, now you cannot see what your loop is doing.

Use let to declare a result variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as "".
let result = "";

**Step 40**
Add a log statement to print the value of result. Depending on which console you use, you may not see anything printed.
console.log(result);

**Step 41**
To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.

The syntax for a for...of loop looks like:

Example Code
for (const value of iterable) {

}
Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

Create a for...of loop to iterate through your rows array, assigning each value to a row variable.

for (const row of rows) {

}

**Step 42**
Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

In your for...of loop, use the addition operator to concatenate the row value to the result value.

for (const row of rows) {
  result = result + row;
}

**Step 43**
Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

Example Code
lineOne = lineOne + "\n" + lineTwo;
Use a second addition operator to concatenate a new line between the existing result value and the added row value.

for (const row of rows) {
  result = result + "\n" + row;
}

**Step 44**
Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

Instead of pushing i to the array, push the value of your character variable.

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

**Step 45**
Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

Example Code
const activity = "Code! ";
activity.repeat(3);
Use the .repeat() method on your character, and give it i for the number.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}

// console output


#
##
###
####
#####
######
#######

**Step 46**
You're getting closer! At this point, you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.

The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

To fix this, add 1 to the value of i in your .repeat() call. Do not assign it back to i like you did in your loop conditions.
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

**Step 47**
The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

Example Code
function name(parameter) {

}
The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

Declare a padRow function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.

function padRow() {
  
}

**Step 48**
In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a test function.

Example Code
function test() {

}
test();
Call your padRow function.

function padRow() {

}
padRow();

**Step 49**
You are calling your padRow function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.
const call = padRow();

function padRow() {

}
const call = padRow();
console.log(call);

**Step 50** 
Now add a log statement to print the value of your call variable.
function padRow() {

}
const call = padRow();
console.log(call);

**Step 51**
Your call variable has an undefined value, even though you defined it! This is because your padRow function does not currently return a value. By default, functions return undefined as their value.

In order to return something else, you need to use the return keyword. Here is an example of a function that returns the string "Functions are cool!":

Example Code
function demo() {
  return "Functions are cool!";
}
Use the return keyword to have your function return the string "Hello!".

function padRow() {
return "Hello!"
}

**Step 52**
When you have a value that is explicitly written in your code, like the "Hello!" string in your function, it is considered to be hard-coded. Hard-coding a value inside a function might not make it as reusable as you'd like.

Instead, you can define parameters for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code.

To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this demo function has a name parameter:

Example Code
function demo(name) {

}
name sounds like a useful parameter, so go ahead and add it to your padRow function.

function padRow(name) {
  return "Hello!";
}

**Step 53**
A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.

Change your padRow function to return the name parameter directly.

function padRow(name) {
  return name;
}

**Step 54**
If you open your console again, you'll see that your padRow function is returning undefined, even though you defined a return value! This is because parameters need to be given a value when you call the function.

When you pass a value to a function call, that value is referred to as an argument. Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

Example Code
function demo(name) {
  return name;
}
demo("Naomi");
Pass your own name as the argument for the name parameter in your padRow call. Remember that your name is a string, so you'll need to use quotes.

function padRow(name) {
  return name;
}
const call = padRow("Anton");


**Step 55**
Before moving on, take a moment to review how functions work.

Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

Then declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);

**Step 56**
With that quick review complete, you should remove your addTwoNumbers function, sum variable, and log statement.

**Step 57**
Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global title variable:

Example Code
const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi")
This example would return "Professor Naomi". Update your padRow function to return the value of concatenating your character variable to the beginning of the name parameter.

function padRow(name) {
  return character + name;
}

**Step 58**
Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error.

To see this in action, use const to declare a test variable in your padRow function. Initialise it with the value "Testing".

Then, below your function, try to log test to the console. You will see an error because it is not defined outside of the function's local scope. Remove that console.log to pass the tests and continue.