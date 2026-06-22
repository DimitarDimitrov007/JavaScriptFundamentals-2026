function identicalArrays(array1, array2) {

    let sum = 0;

    for (let i = 0; i < array1.length; i++) {
        let elementArray1 = array1[i];
        let elementArray2 = array2[i];

        if (elementArray1 !== elementArray2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;

        }else{
            sum += Number(elementArray1);

        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
        

}
identicalArrays(['10', '20', '30'],
    ['10', '20', '30']);