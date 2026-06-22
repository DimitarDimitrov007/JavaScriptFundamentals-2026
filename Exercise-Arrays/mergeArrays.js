function mergeArrays(array1, array2) {
    let merge = [];

    for (let i = 0; i < array1.length; i++) {

        if (i % 2 === 0) {
            let sum = 0;
            sum += Number(array1[i]) + Number(array2[i]);
            merge.push(sum);

        } else {
            let concatenation = array1[i] + array2[i];
            merge.push(concatenation);

        }
    }

    console.log(merge.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);