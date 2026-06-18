function tripleLatin(n){
    n = Number(n);

    for(let i = 97 ; i < 97 + n ; i ++){
        for(let b = 97 ; b < 97 + n ; b ++){
            for(let c = 97 ; c < 97 + n ; c ++){
                let first  = String.fromCharCode(i);
                let second = String.fromCharCode(b);
                let third = String.fromCharCode(c);
                console.log(`${first}${second}${third}`);

            }
        }

    }

}
tripleLatin('3');