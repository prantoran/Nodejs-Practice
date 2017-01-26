var buffer = new ArrayBuffer(8); //size = 8*8
var view = new Int32Array(buffer);

//(8*8)/32 = 2 =>> means that view can store only 2 items
view[0]=5;
view[1]=15;
view[2]=30; //does not appear in console.log
console.log(view);