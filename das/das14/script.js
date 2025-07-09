var arr = ['text','text2',12,49,true];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var arr = [191, 56, 152, 116, 220, 249, 177, 107, 233, 66, 180, 170, 200, 210, 68, 149, 96, 55, 52, 218, 109, 70, 201, 129, 159, 226, 133, 218, 155, 219, 182, 121, 218, 69, 245, 133, 165, 176, 51, 116, 84, 108, 208, 167, 181, 157, 134, 147, 92, 213, 170, 68, 91, 197, 53, 150, 60, 151, 130, 216, 146, 127, 243, 139, 213, 66, 66, 156, 51, 217, 227, 185];
var a = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > 100){
    a++;
  }
}
console.log(a);
var a = Math.floor( Math.random() * 200 );
console.log(a);
var arr = ["monkey","lion","tiger","bear","elephant","human","dolphin","rabbit"];
for(var i=0;i,arr.length;i++){
    if(arr[i]=="human"){
        console.log(arr[i]);
        break;
    }
}