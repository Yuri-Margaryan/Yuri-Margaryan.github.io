const drawCircle = (x, y, angle) => {
    let a = angle;
    for (let i = 0; i < 360; i++) {
        a++;
        goto(x, y);
        if (a % 20 == 0) {
            width(10);
            color('#FEFEFE');
            forward(10);
            color('#888');
            forward(90);
        } else {
            penup();
            forward(100);
            pendown()
        }
        color('#000');
        width(6);
        forward(6);
        left(1);
    }
};
let x = 0;
let y = 0;
let x1 = -280;
let y2 = 0;
let angle = 0;
let angle1 = 5;
const tick = (timestamp) => {
    requestAnimationFrame(tick);
    clear();
    drawCircle(x, y, angle);
    drawCircle(x1, y2, angle1);
    x++;
    x1++;
    angle++;
    angle1++;
    if (x >= 351) {
        x = -351;
    }
    if (x1 >= 351) {
        x1 = -351;
    }
};
requestAnimationFrame(tick);

// let a = Math.random();
// let num = Math.floor(a * 201)

// let arr = []
// arr.push(num)

// for(let i = 0; i<5; i++){
//     let a = Math.random();
//     let num = Math.floor(a * 201)
//     arr.push(num)
// }

// for(let i=0; i<arr.length;i++){
//     goto(0,0)
//     forward(arr[i])
//     right(10)
// }

// setInterval(function() {
//     let x = Math.floor(Math.random() * 201)
//     let y = Math.floor(Math.random() * 201)
//     for(let i = 0; i < 4; i++){
//         forward(100)
//         left(90)
//     }
// } , 2000)

// setTimeout(function() {
//     let a = Math.random()
//     console.log("Hello After 5 Seconds" + a)
// } , 2000)

// let students = [
//     "Yuri",
// ]

// console.log(arr);