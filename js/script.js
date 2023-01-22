let a = parseFloat(prompt('First number'));
let c = prompt('( + ) ( - ) ( * ) ( / )');
let b = parseFloat(prompt('First number'));
let res = 0;

if (isNaN(a) || (isNaN(b))) {
    alert("Wrong input ! REFRESH THE PAGE  :(")
} else {
    if (c === '+') {
        res = a + b;
    } else if (c === '-') {
        res = a - b;
    } else if (c === '*') {
        res = a * b;
    } else if (c === '/') {
        res = a / b;
    }

    alert(a + c + b + " = " + res)
}








