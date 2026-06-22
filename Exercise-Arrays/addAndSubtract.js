function addAndSubtract(array) {
    let modifiedSum = 0;
    let originalSum = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);
        originalSum += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber = currentNumber + i;

        } else {
            currentNumber = currentNumber - i;

        }

        newArray.push(currentNumber);
        modifiedSum += currentNumber;
    }

    console.log(newArray);
    console.log(originalSum);
    console.log(modifiedSum);

}
addAndSubtract([5, 15, 23, 56, 35]);