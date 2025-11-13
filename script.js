let calculation = true
while (calculation) {
    // =========== INPUT TAKING =========== //
    let x = prompt("Enter your first number: ")
    while (x == "" || x == null || isNaN(x)) {
        alert ("Error! Please enter a valid number!")
        x = prompt("Enter your first number: ")
    }
    x = Number(x)
    
    let operator = prompt ("Choose an operator: +  -  *  /")
    while (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
        alert ("Error! Please choose a valid operator!")
        operator = prompt ("Choose an operator: +  -  *  /")
    }
    
    let y = prompt("Enter your second number: ")
    while (y == "" || y == null || isNaN(y)) {
        alert ("Error! Please enter a valid number!")
        y = prompt("Enter your second number: ")
    }
    y = Number(y)
    
    // =========== CALCULATION =========== //
    switch(operator) {
        case "+":
            alert (`Addition result of ${x} and ${y} is ${x + y}`);
            break;

        case "-":
            alert (`Subtraction result of ${x} and ${y} is ${x - y}`);
            break;

        case "*":
            alert (`Multiplication result of ${x} and ${y} is ${x * y}`);
            break;

        case "/":
            while (y == 0) {
            alert ("Error! Can't divide by Zero!")
            y = prompt("Enter your second number: ")
            }
            y = Number(y);
            alert (`Division result of ${x} and ${y} is ${x / y}`);
            break;
    }

    // =========== PERMISSION OF CONTINUATION =========== //
    let answer = prompt ("Do you want to continue for another calculation? Type y for YES or n for NO ").toLowerCase()
    while (answer != "y" && answer != "n") {
        alert ("Error! Please make sure to type either y or n")
        answer = prompt ("Do you want to continue for another calculation? Type y for YES or n for NO ").toLowerCase()
    }
    if (answer === "n") calculation = false;
}