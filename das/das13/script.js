var a = 4;
a++;
a++;
a++;
console.log(a);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
if(as>5){
    console.log('Hi');
}
var sum = 1;
for(var a = 5; a <= 30; a++){
    if(a % 2 != 0){
    console.log(++a);
    sum = sum * 1;
    }
}
var a = 5;
var sum = 1;
while(a < 30){
    if (a%2 != 0){
    sum = sum * a
    }
    a++;
}
console.log(sum);
var a = 1;
for (let i = 0; i < a; i++){
    console.log('Hello World!')
}