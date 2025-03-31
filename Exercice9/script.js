function checkAge(age) {
    age = Number(age);
    let msg = "majeur";
    if (age >= 65) {
        msg = "senior";
    } else if (age < 18) {
        msg = "mineur";
    }
    return ("Vous êtes " + msg + ".");
}

export default checkAge;


