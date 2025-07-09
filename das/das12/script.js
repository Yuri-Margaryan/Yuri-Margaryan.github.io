var a = prompt("What Would You Like To Buy?");
switch (a) {
    case 'phone':
        console.log('$100');
        break;
    case 'tablet':
        console.log('$100');
        break;
    case 'laptop':
        console.log("$200");
        break;
}
var b = prompt('Write The First Letter!')
var c = prompt('Write The Second Letter!')
var d = prompt('Write The Third Letter!')
a = parseFloat(a)
b = parseFloat(b)
if (c == '+') {
console.log(a + b)
} else if (c == '-') {
console.log(a - b)
} else if (c == '*') {
console.log(a * b)
} else if (c == '/') {
console.log(a / b)
} else {
console.log('Wrong Answer!!!')
}