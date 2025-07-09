class Dragon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
        this.energy = 8
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character, character1, character2) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let newGrassE = new Dragon(newCell[0], newCell[1], this.index);
            dragonArr.push(newGrassE);
            matrix[newCell[1]][newCell[0]] = 4;
        }
    }
    eat() {
        let food = random(this.chooseCell(1,2.3))
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 18) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;
        let cell = random(this.chooseCell(0))
        if (cell) {
            matrix[this.y][this.x] = 0
            let newX = cell[0]
            let newY = cell[1]
            matrix[cell[1]][cell[0]] = 4
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in dragonArr) {
            if (this.x == dragonArr[i].x && this.y == dragonArr[i].y) {
                dragonArr.splice(i, 1);
                break;
            }
        }
    }
}