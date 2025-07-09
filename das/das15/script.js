var a = 'Hi,Guys';
console.log(a.split(('')));
var b = [12,32,'tomato',false,78];
a.unshift('Push');
a.unshift('Hello');
a.unshift('123');
a.unshift(100);
console.log(b);
a.pop()
a.pop()
console.log(b);
a.shift();
a.shift();
a.shift();
a.shift();
console.log(b);
var c = 'Lorem Ipsum';
if(isNaN(a)){
    console.log('string');
}
var d = 7.49;
var e = 7;
var f = 25;
var g = -20
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.pow(e,4));
console.log(Math.sqrt(f));
console.log(Math.abs(g));
console.log(Math.random());
function sum(a,pi = 3.14, b){
    return a+b+pi;
    console.log(a+pi+b);
}
var h = sum(5,12);
sum(5);
sum(12);
sum(5,4);
sum(7,100);
sum(20,90);
sum(12,4);
sum(5,12);
console.log(h);
Math.floor(Math.random()+(100))
var min = -4
var max = 8
var a = Math.floor(Math.random() * (max-mix+1) ) + min;
console.log(i);