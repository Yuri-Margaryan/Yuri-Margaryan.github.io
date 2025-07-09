 function getRandInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min
 }

 function getRandomColor() {
     let r = getRandInt(0, 255);
     let g = getRandInt(0, 255);
     let b = getRandInt(0, 255);
     return [r, b, g]
 }

 function drawSquare(x, y, s, w, col) {
     goto(x, y)
     color(col)
     width(w)
     for (let i = 0; i < 4; i++) {
         forward(s)
         left(90)
   }
}

// for (let i = 0; i < 100; i++) {
//     let x = getRandInt(-350, 350)
//     let y = getRandInt(-350, 350)
//     let s = getRandInt(10, 100)
//     let w = getRandInt(1, 7)
//     let col = getRandColor()
//     let a = getRandInt(0, 360)
//     drawSquare(x, y, s, w, col)
//     angle(a)
// }

// let a = getRandInt(10, 50)
// console.log(a)

// let b = getRandInt(30, 200)
// console.log(b)

// color(getRandomColor())

// for(let i = 0; i<4; i++){
//     forward(100)
//     left(90)
// }
let x = -130
let y = -40
let r = 40

function draw() {
clear()
drawSquare(x, y, 100, 2, getRandomColor())

x++;
requestAnimationFrame(draw)
}


requestAnimationFrame(draw)