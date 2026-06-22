function arrayRotation(array, rotations) {
    let currentArray = [];
    let rotationsPassed = 0;

    while (rotations > rotationsPassed) {

        let firstElement = array[0];

        for (let i = 1; i < array.length; i++) {
            let currentNum = array[i];
            currentArray.push(currentNum);

        }

        currentArray.push(firstElement);
        array = currentArray;
        currentArray = [];
        rotationsPassed++;
    }

    console.log(array.join(" "))

}
arrayRotation([51, 47, 32, 61, 21], 2);