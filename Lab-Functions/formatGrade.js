function formatGrade(grade) {
    let text = "";
    if (grade < 3.00) {
        text += "Fail";

    } else if (grade < 3.5) {
        text += "Poor";

    } else if (grade < 4.5) {
        text += "Good";

    } else if (grade < 5.5) {
        text += "Very good";

    } else {
        text += "Excellent";
    }

    if (text !== "Fail") {
        console.log(`${text} (${grade.toFixed(2)})`);

    } else {
        console.log(`${text} (${Math.trunc(grade)})`);
    }


}
formatGrade(3.33);