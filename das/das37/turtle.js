let a = 0;
function drawCircle(x, y, r){
    for(let i = 0; i<360; i++){
    goto(x, y)
    penup()
    forward(r)
    pendown()
    forward(1)
    if(i %30 == 0){
        right(180)
        forward(20)
        right(180)
    }
    right(1)
   }
   goto(x, y)
   forward(80)
   right(a++)
}
let x = 0;
let y = 0;
setInterval(() => {
    clear()
    drawCircle(x, y, 100)
}, 50)