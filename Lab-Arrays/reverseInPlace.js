function reverseInPlace(array){

    for(let i = 0; i < array.length / 2 ; i ++){
        let firstElement = array[i];
        let lastElement = array[array.length - 1 - i];
        array[i] = lastElement;
        array[array.length - 1 - i] = firstElement;
    }

    console.log(array.join(" "));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);