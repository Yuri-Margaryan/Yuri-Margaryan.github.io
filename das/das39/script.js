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
                // if(matrix[y][x] == 1){
                //     fill(255,0,0);
                //     rect(side * x, side * y, side, side);
                // }
                //}
                 if (x == y){
                  fill('green')
                  rect(x * side, y * side, side, side);
                }
                else if(matrix[y][x] == 0){
                    fill('gray')
                    rect(x * side, y * side, side, side);
                }
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