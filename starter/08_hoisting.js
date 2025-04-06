// TODO: Write a function 'greet' and call it before its definition
// TODO: Write a function 'showUserData' where you use a variable before declaring it with var
greet();

function greet() {
  console.log("Welcome to the course!");
}

function showUserData() {
  console.log(userData);
  var userData = 0;
}

module.exports = { greet, showUserData };
