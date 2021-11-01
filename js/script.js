function exponentiation(num1, num2) {
    const result = num1 ** num2;
    alert(result);
}
function multiplay(num1, num2) {
    const result = num1 * num2;
    alert(result);
}
function division(num1, num2) {
    const result = num1 / num2;
    alert(result);
}
function modulo(num1, num2) {
    const result = num1 % num2;
    alert(result);
}
function mainFunction(callback) {
    const num1 = prompt('Введите первое число:');
    const num2 = prompt('Введите второе число:');
    if (num1 === null || num1.trim() === `` || isNaN(+num1) || num2 === null || num2.trim() === `` || isNaN(+num2))
        return alert(`some error`);
    callback(num1, num2);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);