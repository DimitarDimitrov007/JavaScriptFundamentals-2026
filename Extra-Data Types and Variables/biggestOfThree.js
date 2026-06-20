function biggestNum(num1, num2, num3) {
    let biggest = 0;

    if (num1 > num2) {
        biggest = num1;

    } else {
        biggest = num2;

    }

    if (biggest > num3) {
        console.log(biggest);

    } else {
        console.log(num3);

    }


}
biggestNum(-2,
    7,
    3
);