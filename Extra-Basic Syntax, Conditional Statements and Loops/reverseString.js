function reverseString(text){
    let reversedText = "";

    for(let i = text.length - 1 ; i >= 0; i --){
        let currentChar = text[i];
        reversedText += currentChar;
    }

    console.log(reversedText);

}
reverseString("Hello");