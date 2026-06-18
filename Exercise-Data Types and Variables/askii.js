function askii(char1,char2,char3){
    let reversedChars = char3 + char2 + char1;
    console.log(reversedChars);
    console.log(`${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`);

}
askii('a',
'b',
'c'
);