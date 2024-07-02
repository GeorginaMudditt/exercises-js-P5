// votre code ici
function checkAge(age) {
    if (age < 18) {
        return "You are under 18";
    } else if (age >= 18 && age <= 65) {
        return "You are an adult";
    } else {
        return "You are a senior";
    }
}
export default checkAge;
