function specialNumbers(num){

    for(let i = 1; i <= num ; i++){
        let currentNum = String(i);
        let sum = 0;

        for(let y = 0 ; y < currentNum.length; y ++){
            let currentChar = Number(currentNum[y]);
            sum += currentChar;

        }

        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${currentNum} -> True`);

        }else{
            console.log(`${currentNum} -> False`);

        }
    }

}
specialNumbers(15);