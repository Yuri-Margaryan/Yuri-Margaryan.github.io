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
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}

let side = 80;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    createCharacter(10, 1)
    createCharacter(5, 2)
    createCharacter(3, 3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                var grE = new GrassEater(x, y, 2);
                grassEaterArr.push(grE);
            } else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 2);
                predatorArr.push(pre);
            }
        }
    }

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
            else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat();
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat();
    }
}