// Function to greet a user when he/she enters their name

const username = prompt("Enter your name : ");

function greetUser(name) {
    console.log(`Hello, ${name}`);
    console.log("Would you like to order some food or drinks?");
}

greetUser(username);
