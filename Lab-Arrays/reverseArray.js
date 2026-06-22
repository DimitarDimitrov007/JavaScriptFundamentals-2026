function reverseArray(n,array){
    let newArray = [];

    for(let i = n - 1; i >= 0 ; i --){
        let currentNum = array[i];
        newArray.push(currentNum);
    }

    console.log(newArray.join(" "));

}
reverseArray(3, [10, 20, 30, 40, 50]);