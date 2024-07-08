// votre code ici
function checkAge(age) {
    if (age < 18) {
        return 'You are under 18';
    } else if (age >= 18 && age <= 65) {
        return 'You are adult';
    } else {
        return 'You are elder';
    }
}
export default checkAge;

console.log(checkAge(15));
console.log(checkAge(30));
console.log(checkAge(75));
