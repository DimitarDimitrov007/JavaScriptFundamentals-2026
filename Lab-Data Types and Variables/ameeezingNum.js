function ameeezingNum(num){
    let sum = 0;
    let number = String(num);

    for(let i = 0; i < number.length; i ++){
        let currengNumber = Number(number[i]);
         sum += currengNumber;

    }

    sum = String(sum);

    for(let x = 0; x < sum.length ; x ++ ){
        let currentStat = Number(sum[x]);

        if(currentStat === 9){
            console.log(`${num} Amazing? True`);
            return;

        }
          
    }

    console.log(`${num} Amazing? False`);
}
ameeezingNum(1233);


