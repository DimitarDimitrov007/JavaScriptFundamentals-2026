function rightPlace(word, char, word2) {

    let copy = "";

    for (let i = 0; i < word.length; i++) {

        let currentChar = word[i];

        if (currentChar === "_") {
            copy += char

        } else {
            copy += currentChar;
        }


    }

    if (copy === word2) {

        console.log("Matched");

    } else {

        console.log("Not Matched");
    }


} 
rightPlace("Str_ng",
"i",
"String");