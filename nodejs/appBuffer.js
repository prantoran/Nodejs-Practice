var buf = new Buffer('Hello','utf8');
//utf-8 encoding is deafult
//if not given, default encoding is utf-8

console.log(buf);
console.log(buf.toString()); //using utf-8 encoding
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());