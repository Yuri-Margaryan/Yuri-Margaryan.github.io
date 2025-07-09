// let leftB = document.getElementById('leftBTN');
// let rightB = document.getElementById('rightBTN');
// let BT = document.getElementById('BTN');
// leftB.addEventListener('click' , Myfunc)
// rightB.addEventListener('click' , Myfunc2)
// BT.addEventListener('click', Myfunc3)
// let a = 0;
// function Myfunc() {
//     a--;
//     console.log(a);
// }
// function Myfunc2() {
//     a++;
//     console.log(a);
// }
// function Myfunc3() {
//     alert("Hi!")
// }
let draw1 = document.getElementById('draw')
draw1.addEventListener('click' , dra)
let flag = true;
function dra() {
    flag = false;
}
let matrix = [
    // [12,32],
    // []
]
    // [0,1,0,2,2,0,0,2],
    // [0,3,0,1,1,0,0,0],
    // [0,2,0,1,0,0,1,3],
    // [0,0,1,2,2,0,2,2],
    // [0,0,1,0,0,0,2,0],
    // [0,0,3,0,1,1,0,0]
;
let side = 60;
let n = 10;
let m = 10;
for (let i = 0; i < n; i++){
    matrix.push([])
    for (let j = 0; j < m; j++){
        matrix[i][j] = 0;
    }
}
 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    for(let y = 0; y < matrix.length; y++){
            for(let x = 0; x < matrix[y].length; x++){
                if(flag != true && x==y ){
                    fill('green');
                    rect(side * x, side * y, side, side);
                } else {
                    fill(100,100,100);
                    rect(side * x, side * y, side, side);
                }
                //}
                //  if (x == y){
                //   fill('green')
                //   rect(x * side, y * side, side, side);
                // }
                // else if(matrix[y][x] == 0){
                //     fill('gray')
                //     rect(x * side, y * side, side, side);
                // }
                // else if(matrix[y][x] == 2){
                //     fill('green')
                //     rect(x * side, y * side, side, side);
                // } else if(matrix[y][x] == 3){
                //     fill('red')
                //     rect(x * side, y * side, side, side);
                // }
        }
    }
}
// console.log(arr[0])[6];