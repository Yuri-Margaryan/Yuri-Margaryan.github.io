// alert('Hello World!');
// let a = ['Barev', 12, true, 90];
// a.pop();
// a.unshift('test');
// a.unshift(100);
// a.shift();
// a.shift();3
// let min = 110;
// let max = 120;
// let a = Math.floor (Math.random() * (max-min+1)) + min;
// console.log(a);
// let w = 100;
// function sum(w,b){
//     w = 10;
//     console.log(w);
//     return w+b;
// }
// console.log(w);
// sum(1,2);
// console.log(w);
// let s = sum(10,15);
// let p = sum(8,9);
// console.log(s,p)
// let a = 100;
// let b = 200;
// let p = calcPer(a, b);
// let s = calcSq(a, b);
// console.log(p, s);
// function calcPer(c, d){
//     return 2*(c+d);
// }
// function calcSq(e, f){
//     return e*f;
// }
function setup() {
    createCanvas(500,500);
    background('#acacac');
}
function draw() {
    ellipse(50, 50, 80, 80);
}
function setup() {
    createCanvas(500, 500);
    background('#acacac');
}
function draw() {
    ellipse(50, 50, 80, 80);
    rect(10, 100, 150, 150);
}
function setup() {
    createCanvas(500, 500);
    background('#acacac');
}
function draw() {
    fill(0,255,0);
    ellipse(50, 50, 80, 80);
    fill(255,0,0);
    rect(10, 100, 150, 150);
}
function setup() {
    createCanvas(500, 500);
    background('#acacac');
    noStroke();
}
function draw() {
    fill(0,255,0);
    ellipse(50, 50, 80, 80);
    fill(255,0,0);
    rect(10, 100, 150, 150);
}