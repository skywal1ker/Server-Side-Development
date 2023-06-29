// The Readable events:
// > close, data, end, error



// Node.js program to demonstrate the 
// readable close event
// Including fs module
const fs1 = require('fs');
// Constructing readable stream
const readable1 = fs1.createReadStream("input.txt");
// Calling close method
readable1.close();
// Handling close event
readable1.on("close", () => {
 console.log("Stream ended");
});
console.log("Done...");



// Node.js program to demonstrate the 
// readable data event
// Including fs module
const fs2 = require('fs');
// Constructing readable stream
const readable2 = fs2.createReadStream("input.txt");
// Instructions to read data
readable2.on('readable', () => {
let chunk2;
// Using while loop and calling
// read method
while (null !== (chunk2 = readable2.read())) {
 // Displaying the chunk
 console.log(`read: ${chunk2}`);
}
});
// Handling the data event
readable2.on('data', (chunk2) => {
console.log(`chunk length is: ${chunk2.length}`);
});
console.log("Done...");




// Node.js program to demonstrate the 
// readable end event
// Including fs module
const fs3 = require('fs');
// Constructing readable stream
const readable3 = fs3.createReadStream("input.txt");
// Instructions to read data
readable3.on('readable', () => {
let chunk3;
// Using while loop and calling
// read method
while (null !== (chunk3 = readable3.read())) {
 // Displaying the chunk
 console.log(`read: ${chunk3}`);
}
});
// Handling end event
readable3.on('end', () => {
console.log('All the data is being consumed.');
});
console.log("Done...");







// Node.js program to demonstrate the 
// readable error event
// Including fs module
const fs4 = require('fs');
// Constructing readable stream
const readable4 = fs4.createReadStream("input.txt");
// Handling error event
readable4.on("error", err => {
 console.log(err);
});
console.log("Done...");
S