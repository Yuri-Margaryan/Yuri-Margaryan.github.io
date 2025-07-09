// color('red')
// for(let i = 0; i<36; i++){
//     goto(0, 0)
//     left(10)
//     forward(200)
// }
// color('green')
// for(let i = 0; i<45; i++){
//     goto(-200,-200)
//     left(8)
//     forward(100)
// }
// color('blue')
// for(let i = 0; i<45; i++){
//     goto(269,274)
//     left(8)
//     forward(70)
// }
 setSpeed(200)
 let b = 200;
 for(let i = 0; i<20; i++){
     forward(b)
     left(90)
     b = b - 10;
}