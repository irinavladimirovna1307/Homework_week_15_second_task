function processArray() {
    let numbers = [];
    for (let i = -10; i <= 10; i++) {
        numbers.push(i);
    }
    numbers = numbers.filter(num => num >= 0);
    numbers = numbers.map(num => num ** 2);
    numbers.sort((a, b) => b - a);
    document.getElementById("output").innerHTML = "Результат: " + numbers.join(", ");
}
