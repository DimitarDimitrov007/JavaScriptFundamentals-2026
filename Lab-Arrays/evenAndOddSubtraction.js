function evenOddSubtrc(array){
    let evenSum = 0;
    let oddSum = 0;

    for (let number of array){

        if(number % 2 === 0){
            evenSum += number;

        }else{
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}
evenOddSubtrc([3,5,7,9]);
