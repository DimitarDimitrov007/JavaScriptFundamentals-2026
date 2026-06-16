function triangle(n) {
    let line = "";

    for (let i = 1; i <= n; i++) {
        for (let x = 1; x <= i; x++) {
            line += i + " ";

        }
        console.log(line);

        line = "";

    }

}
triangle(5);