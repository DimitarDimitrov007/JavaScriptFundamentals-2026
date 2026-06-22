function equalSums(array) {
    let sumBeforeNum = 0;
    let sumAterNum = 0;

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];

        for (let x = 0; x < i; x++) {
            let elementBefore = Number(array[x]);
            sumBeforeNum += elementBefore;

        }

        for (let y = i + 1; y < array.length; y++) {
            let elementAfter = Number(array[y]);
            sumAterNum += elementAfter;

        }

        if (sumAterNum === sumBeforeNum) {
            console.log(i);
            return;

        }

        sumAterNum = 0;
        sumBeforeNum = 0;


    }

    console.log("no");


}
equalSums([1, 2, 3, 3]);