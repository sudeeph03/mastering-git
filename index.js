// Function to greet a user when he/she enters their name

const username = prompt("Enter your name : ");

function greetUser(name) {
    console.log(`Hello, ${name}`);
    takeOrder();
}

function takeOrder() {
    let response = prompt("Would you like to order food or drinks? (y/n) :")
        .toString()
        .toLowerCase();
    if (!response || response !== "y" || response !== "n")
        return "Invalid Response";

    if (response == "y") {
        console.log("Here is our menu");
        let order = prompt("What would you like to order, Here is our menu :");

        console.log(
            `Your order ${order} is recieved and it will be delivered shortly!`
        );
    } else {
        console.log(`Ok then take your time`);
    }
}

greetUser(username);
