var fs = require('fs');
//analogous to freopen
var greet = fs.readFileSync(__dirname+'/fileandfstext.txt','utf8');//full path
// __dirname is one of those parameters passed to me
//this code is wrapped in that function
//gives the path to the directory where the code is
//the location of this file/script
//by default, encoding is utf8

//fs.readFileSync() uses buffer
//data from txt file first loads to buffer as binary data
//then using the stated/default encoding, translates the binary
//data from the buffer
console.log(greet); //happened first

//the name Sync implies that it is a asynchronous 
//method to read a file
//useful for reading configuration file, before everything else


//asynchronous version
var greet2 = fs.readFile(__dirname+'/fileandfstext.txt','utf8',
function(err,data){ //callback
    //remember libuv, fs.readFile tells libuv to post the job to the cpu/processor
    //after libuv does that, it constantly checks the completed queue through event loop
    //once the posted job arrives at completed queue
    //libuv finishes processing
    //after libuv is done processing
    //the callback functin block is invoked with the parameters 


    //if there is no error, err = NULL
    console.log(data); //happened third
    //data is a buffer, if encoding is not defined in readFile()
    //if encoding is defined (utf8), then the buffer will be first converted to
    //string and assigned to data
});

console.log('Done!'); //happened second

//buffer is data seating in memory
//it is called the heap in v8
//if the file is very large and many ppl is running the 
//program, you will end up with many buffers that are very large in size

//we need to find a way to minimize the amount of data
//we are working in any one time


var readable = fs.createReadStream(__dirname+'/filesandfstext2.txt',{encoding:'utf8',highWaterMark:2*1024});
//highWaterMark: states the number of bytes we want our buffer size to be

var writable = fs.createWriteStream(__dirname+'/filesandfstext2-output.txt');


readable.on('data',function(chunk){ 
    //the stream will fill up a buffer
    console.log(chunk);
    console.log(chunk.length);
    writable.write(chunk);

});

var readable2 = fs.createReadStream(__dirname+'/filesandfstext2.txt');
var writable2 = fs.createWriteStream(__dirname+'/filesandfstext2pipe-output.txt');

readable2.pipe(writable2);


//#########################################
var zlib = require('zlib'); //gzip

var compressed = fs.createWriteStream(__dirname + '/filesandfstext2pipe-output.txt.gz');

var gzip = zlib.createGzip();
//I give it a chunk of data, it gives me a proper output
//gzip is duplex, readable and writable

readable.pipe(gzip).pipe(compressed);
//going from stream to stream to stream