function magicSum(array,num){

    for(let i = 0 ; i < array.length ; i++){
        for(let x = i + 1 ; x < array.length ; x ++){

            let currentNum = array[i];
            let nextNum = array[x];

            if(currentNum + nextNum === num){
                console.log(`${currentNum} ${nextNum}`);
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],
8
);