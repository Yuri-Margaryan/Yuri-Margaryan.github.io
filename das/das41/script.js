// let obj = {
//     x: 7,
//     y: 19,
//     age: 15,
//     Suriname: 'Margaryan',
//     'Is Tumo Student': true,
//     aum(a){
//         return this["Is Tumo Student"]
//     },
//     sum(a){
//         return this.x + a;
//     }
// }
// console.log(obj.sum(100))
//[12,43,'Text',true,'123'];
// console.log(arr[1]);
// console.log(arr[3]);
class Charlie {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.hungry = true;
        this.mouseCount = 10;
        this.mouseX = 7;
        this.mouseY = 7;
    }
    move(){
        if(this.energy <= 0){
            console.log('Charlie has no energy!');
            return;
        }
        this.energy--;
        this.x++;
        this.y++;
    }
    eat(){
        this.move();
        if(this.energy > 0 && this.hungry == true && this.mouseCount > 0){
            if(this.mouseX == this.x && this.mouseY == this.y){
                this.mouseCount--;
                this.energy++;
                this.hungry = false;
                console.log('Oh Finally ' + this.mouseCount);
            } else {
                console.log('No Mouse');
                return;
            }
        }
    }
}
let kuzya = new Charlie(1,1);
kuzya.eat();
kuzya.eat();
kuzya.eat();
kuzya.eat();
kuzya.eat();
kuzya.eat();
kuzya.eat();
// let sharik = new Charlie(100,400);
// console.log(kuzya);
// console.log(sharik);
// let arr = 'some text';
// console.log(text.split(' '));