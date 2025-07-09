let matrix = []

let n = 10
let m = 10
for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i][j] = 0;
    }
}

function createCharacter(count, index) {
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * n);
        let y = Math.floor(Math.random() * m);
        if(matrix[x][y] == 0){
            matrix[x][y] = index
        }
    }    
}

 let side = 80;
 let grassArr = [];

 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    createCharacter(10, 1)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x,y,1);
                grassArr.push(gr);
            }
        }
    }
    console.log(grassArr);
 }

 function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
         
            rect(x * side, y * side, side, side);
     
     /*
     fill("blue")
     text(x+" "+y, x*side+side/2,y*side+side/2)
     */	
        }
    }
 }