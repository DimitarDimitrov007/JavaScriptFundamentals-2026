function maxNumber(array) {

    let topIntigers = [];
    let isBigger = true;

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i];

        for (let x = i + 1; x <= array.length; x++) {

            let numbersToCompare = array[x];

            if (currentNum <= numbersToCompare) {
                isBigger = false;
                break;

            } else {
                isBigger = true;
            }


        }

        if (isBigger) {
            topIntigers.push(currentNum);


        }
    }

    console.log(topIntigers.join(" "));

}
maxNumber([1, 4, 3, 2]);