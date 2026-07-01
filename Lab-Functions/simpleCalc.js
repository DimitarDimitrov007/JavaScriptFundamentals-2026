function simpleCalc(numOne, numTwo, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subract = (a, b) => a - b;

    function operatorFinder(first, second, operator) {

        switch (operator) {
            case "multiply":
                return multiply(first, second);

            case "divide":
                return divide(first, second);

            case "add":
                return add(first, second);

            case "subtract":
                return subract(first, second);
        }

    }

        return operatorFinder(numOne, numTwo, operator);

}
console.log(simpleCalc(5,
    5,
    'multiply'
));