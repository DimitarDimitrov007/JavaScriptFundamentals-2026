function login(input) {

    let userName = String(input[0]);
    let counter = 0;

    let password = "";

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }

    for (let x = 1; x < input.length; x++) {
        let currentPassword = input[x];

        if (currentPassword === password) {
            console.log(`User ${userName} logged in.`);
            break;

        } else {
            counter++;
            if (counter === 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");

        }


    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
