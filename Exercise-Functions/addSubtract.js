function addSubtract(num1,num2,num3){

    let sum = (a,b) => a + b;
    let subtract = (a,b) => a - b ;

    let firstTwoNumbers = sum(num1,num2);

    return subtract(firstTwoNumbers,num3);

}
console.log(addSubtract(23,
6,
10
));