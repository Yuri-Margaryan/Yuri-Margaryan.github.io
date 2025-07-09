// let arr = [7, 10, 20]

// arr.push(8)
// arr.pop()
// arr.splice(0, 2)

// console.log("Hi!" "How Are You?")

// console.log(a, b, c)

// let a = Math.random()

// let b = Math.random(4.4)

// let d = stanaAge(2009)

// console.log(d)

// function stanaAge(Year){
//     return 2024 - Year
// }

// Math.random(4.4)

// let m = 4;
// let n = 5;

// function num(m, n){
//     return m+n
// }

// let a = num(4, 10);
// let b =(7, 8)

// console.log(a)

for(let i = 0; i<200; i++){
    gcelErankyun()
    left(randomInt(0, 90))
    }
    function gcelErankyun(){
    color("blue")
    goto(randomInt(-350,350), randomInt(-350, 350))
    let koxm = randomInt(10, 100);
    for(let i = 0; i<3; i++){
    forward(koxm);
    left(120)
    }
    }
    function randomInt(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
    }