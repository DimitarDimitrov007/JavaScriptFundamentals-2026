function printAndSum(start,end){
    let sum = 0;
    let allNumbers = "";

    for(let i = start ; i <= end; i++){
        let currentNumber = i;
        allNumbers += i + " ";
        sum += currentNumber;

    }

    console.log(allNumbers);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);